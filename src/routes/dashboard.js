/*
 * filename - dashboard.js
 * The Wallet route
 * @param {Object} router - This is the router object, used to registered routes as provided by express
 * @param {Object} dashboardController - The dashboard controller, injected as a dependency
 *
 * @return {object}
 *
 */

const dashboardRoutes = ({ router, dashboardController }) => {
	/**
	 * @api {get} /dashboard Load user dashboard
	 * @apiVersion 1.0.0
	 * @apiName Load user dashboard
	 * @apiGroup Dashboard
	 * @apiDescription This endpoint returns the details of a user dashboard, you do not need any parameter to get the user dashboard detais.
	 * You only need the authorization header pointing to the token that contains the user details
	 *
	 * @apiHeader {string} Authorization JWT Access Token that contains the user details
	 *
	 * @apiSuccess (Success 200) {String} message Dashboard loaded
	 *
	 */
	router.get("/", dashboardController.getUserDashboard);

	return router;
};

export default dashboardRoutes;
