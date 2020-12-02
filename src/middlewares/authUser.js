/*
 * filename - authUser.js
 * @param {object} response - This is a response helper, that helps respond to the controller, injected as a dependency
 * @param {object} users  - This is a MongoDB helper that helps interact with the user collection
 * @param {object} jwt - The jwt package, injected as dependency
 *
 */

const authUser = ({ response, jwt, users }) => {
	/**
	 *
	 * Authentication middleware, extracts the Authorization header and authenticate it
	 * @param {Object} req - The request object
	 * @param {Object} res - The response object
	 * @param {} next - callback function that forwards to the next middleware in the stack
	 * @return {Object|}
	 *
	 */

	return async (req, res, next) => {
		let authHeader = req.headers.authorization;
		if (typeof authHeader == "undefined" || authUser == "") {
			return res
				.status(403)
				.json(response.forbiddenError("Authentication required"));
		} else {
			let auth = authHeader.split(" ");
			if (auth[0] !== "Bearer") {
				return res
					.status(403)
					.json(response.forbiddenError("Authentication required"));
			} else {
				try {
					let data = await jwt.verify(
						auth[1],
						process.env.JWT_SECRET
					);
					let user = await users.findOne({ email: data.email });
					if (!user) {
						return res
							.status(403)
							.json(
								response.forbiddenError(
									"Authentication required"
								)
							);
					}
					req.user = {
						_id: user._id,
						email: user.email,
						name: user.name,
						role: user.role,
					};
					next();
				} catch (e) {
					return res
						.status(403)
						.json(
							response.forbiddenError("Authentication required")
						);
				}
			}
		}
	};
};

export default authUser;
