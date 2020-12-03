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

const fundRoutes = ({ router, authUser, fundWalletController }) => {
	
    router.post("/fund", authUser, fundWalletController.fund);
    
    // not to be authenticated is just a call back to verify payment
	router.get("/verify",  fundWalletController.verify);

	return router;
};

export default fundRoutes;
