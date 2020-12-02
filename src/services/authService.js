/*
 * filename - authService.js
 * This is the Authentication service file, contains the business logic of user registration, login etc
 * @param {object} response - This is a response helper, that helps respond to the controller, injected as a dependency
 * @param {object} users  - This is a MongoDB helper that helps interact with the user collection
 * @param {object} jwt - The jwt package, injected as dependency
 * @param {boolean|string} validateRegistration - validates the registration request body
 * @param {boolean|string} validateLogin - validates the login request body
 * @param {object} argon2 - for hashing and verifying user passwords
 * @param {} ObjectId - converts datatype to mongoDB ObjectId
 *
 */

const authService = ({
	response,
	users,
	jwt,
	validateRegistration,
	validateLogin,
	argon2,
	otpGenerator,
	ObjectId,
}) => {
	return {
		async registerUser({ user }) {
			let { name, email, password } = user;
			let isValid = validateRegistration(name, email, password);
			if (isValid === true) {
				try {
					let userExists = await users.findOne({ email });
					if (userExists) {
						return response.badRequestError(
							"Email already registered"
						);
					} else {
						password = await argon2.hash(password);
						let otp = otpGenerator.generate(6, {
							specialChars: false,
							alphabets: false,
						});
						user = await users.create({
							name,
							email,
							password,
							otp,
							isActivated: false,
							role: "user",
						});
						if (!user) {
							return response.serverError(
								"An error occured while creating account"
							);
						}
						let payload = {
							_id: user._id,
							name: user.name,
							email: user.email,
							role: user.role,
							isActivated: user.isActivated,
						};
						let accessToken = await jwt.sign(
							payload,
							process.env.JWT_SECRET,
							{ expiresIn: "3d" }
						);
						return response.custom(
							"User registered",
							{ accessToken },
							201
						);
					}
				} catch (e) {
					return response.serverError();
				}
			} else {
				return response.badRequestError(isValid);
			}
		},

		async loginUser({ user }) {
			let { email, password } = user;
			let isValid = validateLogin(email, password);
			if (isValid === true) {
				try {
					let userExists = await users.findOne({ email });
					if (userExists) {
						let passwordMatch = await argon2.verify(
							userExists.password,
							password
						);
						if (passwordMatch) {
							let payload = {
								_id: userExists._id,
								name: userExists.name,
								email: userExists.email,
								role: userExists.role,
							};
							let accessToken = await jwt.sign(
								payload,
								process.env.JWT_SECRET,
								{ expiresIn: "3d" }
							);
							return response.custom(
								"User loggedin",
								{ accessToken },
								200
							);
						} else {
							return response.badRequestError(
								"Incorrect password"
							);
						}
					} else {
						return response.badRequestError(
							"Email already registered"
						);
					}
				} catch (e) {
					return response.serverError();
				}
			} else {
				return response.badRequestError(isValid);
			}
		},

		async requestEmailOtp({ user }) {
			let otp = otpGenerator.generate(6, {
				specialChars: false,
				alphabets: false,
			});
			console.log(otp);
			try {
				user = await users.updateOne({ email: user.email }, { otp });
				if (user) {
					return response.custom("OTP generated", { otp }, 200);
				}
				return response.serverError();
			} catch (e) {
				return response.serverError();
			}
		},

		async verifyEmailOtp({ user, body }) {
			try {
				user = await users.findOne({ email: user.email });
				if (body.otp === user.otp) {
					user = await users.updateOne(
						{ email: user.email },
						{ otp: null, isActivated: true }
					);
					return response.custom("OTP verified", { ok: 1 }, 200);
				}
				return response.serverError("A server error occured");
			} catch (e) {
				return response.serverError(e.toString());
			}
		},
	};
};

export default authService;
