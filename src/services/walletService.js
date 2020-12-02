/*
 * filename - walletService.js
 * This is the Wallet service file, contains the business logic of wallet creation, update etc
 * @param {object} response - This is a response helper, that helps respond to the controller, injected as a dependency
 * @param {object} wallets  - This is a MongoDB helper that helps interact with the wallets collection
 * @param {} ObjectId - converts datatype to mongoDB ObjectId
 *
 */

const walletService = ({ response, wallets, ObjectId }) => {
	return {
		async createWallet({ user, wallet }) {
			try {
				let userHasWallet = await wallets.findOne({
					ownerId: ObjectId(user._id),
				});
				let identifierExists = await wallets.findOne({
					identifier: wallet.identifier,
				});

				if (identifierExists) {
					return response.badRequestError(
						"Wallet identifier not available"
					);
				}
				if (!userHasWallet) {
					return await createWallet();
				} else {
					if (user.role === "business") {
						return await createWallet();
					}
					return response.unauthorizedError(
						"You cannot create more than one wallet"
					);
				}
			} catch (e) {
				return response.serverError(e.toString());
			}

			async function createWallet() {
				wallet = await wallets.create({
					name: wallet.name,
					ownerId: ObjectId(user._id),
					identifier: wallet.identifier,
				});
				if (wallet) {
					return response.custom("Wallet created", { wallet }, 200);
				}
				return response.serverError();
			}
		},
	};
};

export default walletService;
