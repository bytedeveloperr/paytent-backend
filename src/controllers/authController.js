/*
 * filename - authController.js
 * The Authentication controller, handles auth related requests
 * @param {Object} authService - This is the Authentication service injected as a dependency
 * @return {object}
 *
 */

const authController = ({ authService }) => {
	return {
		async registerUser(req, res) {
			try {
				let response = await authService.registerUser({
					user: req.body,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},

		async loginUser(req, res) {
			try {
				let response = await authService.loginUser({
					user: req.body,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},

		async requestEmailOtp(req, res) {
			try {
				let response = await authService.requestEmailOtp({
					user: req.user,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},

		async verifyEmailOtp(req, res) {
			try {
				let response = await authService.verifyEmailOtp({
					user: req.user,
					body: req.body,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},
	};
};

export default authController;
