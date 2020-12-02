/*
 * filename - wallet.js
 * The Wallet route
 * @param {Object} router - This is the router object, used to registered routes as provided by express
 * @param {Object|Any} authUser - The authentication middleware used to protect routes, injected as a dependency
 * @param {Object} walletController - The wallet controller, injected as a dependency
 *
 * @return {object}
 *
 */

const walletRoutes = ({ router, authUser, walletController }) => {
	/**
	 * @api {post} /wallets/create Create a new wallet
	 * @apiVersion 1.0.0
	 * @apiName Create a new wallet
	 * @apiGroup Wallet
	 * @apiDescription This endpoint creates a wallet and returns the details.
	 * You only need the authorization header pointing to the token that contains the wallet owner details
	 *
	 * @apiParam (Request body) {String} name The name of the Wallet
	 * @apiParam (Request body) {String} identifier The wallet identifier e.g #wallet-name
	 *
	 * @apiHeader {string} Authorization JWT Access Token that contains the user details
	 *
	 * @apiSuccess (Success 201) {String} message Wallet created
	 *
	 *
	 */
	router.post("/create", authUser, walletController.createWallet);

	return router;
};

export default walletRoutes;
