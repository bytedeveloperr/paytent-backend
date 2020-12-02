const registerValidation = ({ isEmpty, isEmail, isLength }) => {
	return (name, email, password) => {
		if (
			typeof name == "undefined" ||
			typeof email == "undefined" ||
			typeof password == "undefined"
		) {
			return "Invalid request body";
		}
		if (isEmpty(name)) {
			return "The name field is required";
		}
		if (isEmpty(email)) {
			return "The email field is required";
		}
		if (!isEmail(email)) {
			return "The email format is not valid";
		}
		if (isEmpty(password)) {
			return "The password field is required";
		}
		if (!isLength(password, { min: 8 })) {
			return "The password cannot be less than eight characters";
		}
		return true;
	};
};

const loginValidation = ({ isEmpty, isEmail }) => {
	return (email, password) => {
		if (typeof email == "undefined" || typeof password == "undefined") {
			return "Invalid request body";
		}

		if (isEmpty(email)) {
			return "The email field is required";
		}
		if (!isEmail(email)) {
			return "The email format is not valid";
		}
		if (isEmpty(password)) {
			return "The password field is required";
		}
		return true;
	};
};

export { registerValidation, loginValidation };
