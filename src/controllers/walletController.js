/*
 * filename - walletController.js
 * The Wallet controller, handles auth related requests
 * @param {Object} authService - This is the Wallet service injected as a dependency
 * @return {object}
 *
 */

const walletController = ({ walletService }) => {
	return {
		async createWallet(req, res) {
			try {
				let response = await walletService.createWallet({
					user: req.user,
					wallet: req.body,
				});
				res.status(response.status).json(response);
			} catch (e) {
				res.status(500).json({ message: e.toString(), status: 500 });
				throw e;
			}
		},
	};
};

export default walletController;
