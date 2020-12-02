/*
 * filename - response.js
 * This contain some helper functions to respond to the client
 *
 */

let response = {
	notFoundError(error) {
		return {
			success: false,
			message: "Resource not found",
			data: { error },
			status: 404,
		};
	},

	unauthorizedError(error) {
		return {
			success: false,
			message: "You Unauthorized to access this resource",
			data: { error },
			status: 401,
		};
	},

	forbiddenError(error) {
		return {
			success: false,
			message: "You are forbidden to access this resource",
			data: { error },
			status: 403,
		};
	},

	badRequestError(error) {
		return {
			success: false,
			message: "Your request to the server was bad",
			data: { error },
			status: 400,
		};
	},

	serverError(error) {
		return {
			success: false,
			message: "A server error occured",
			data: { error },
			status: 500,
		};
	},

	custom(message, data, status) {
		return {
			success: true,
			message,
			data,
			status,
		};
	},
};

export default response;
