/*
 * filename - dashboardController.js
 * The Wallet controller, handles auth related requests
 * @param {Object} authService - This is the Wallet service injected as a dependency
 * @return {object}
 *
 */

const dashboardController = ({ dashboardService }) => {
	return {
		async getUserDashboard(req, res) {
			try {
				let response = await dashboardService.getUserDashboard({
					user: req.user,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},
	};
};

export default dashboardController;
