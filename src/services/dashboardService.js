/*
 * filename - dashboardService.js
 * This is the Wallet service file, contains the business logic of wallet creation, update etc
 * @param {object} response - This is a response helper, that helps respond to the controller, injected as a dependency
 * @param {object} wallets  - This is a MongoDB helper that helps interact with the wallets collection
 * @param {} ObjectId - converts datatype to mongoDB ObjectId
 *
 */

const dashboardService = ({ response, users, wallets, ObjectId }) => {
	return {
		async getUserDashboard({ user }) {
			let dashboardData = {};
			try {
				user = await users.findOne({ _id: ObjectId(user._id) });
				let userWallets = await wallets.find({
					ownerId: ObjectId(user._id),
				});
				if (user) {
					delete user.password;
					dashboardData.user = user;
					dashboardData.user.wallets = userWallets;
					return response.custom(
						"Dashoard Loaded",
						{ dashboardData },
						200
					);
				}
				return response.serverError();
			} catch (e) {
				return response.serverError(e.toString());
			}
		},
	};
};

export default dashboardService;
