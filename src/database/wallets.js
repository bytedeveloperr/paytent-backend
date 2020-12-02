/*
 * filename - wallets.js
 * This provides some kind of helpers around MongoDB to interact with the wallets collection
 * @param {Object} database - This is the database object
 * @param {} ObjectId - The MongoDB function that helps convert datatypes to ObjectId type
 * @return {Object}
 *
 */

const wallets = async ({ database, ObjectId }) => {
	const _wallets = database.collection("wallets");
	return {
		async findOne(query) {
			let wallet = await _wallets.findOne(query);
			return wallet;
		},

		async find(query) {
			let wallets = await _wallets.find(query);
			return wallets.toArray();
		},

		async create(data) {
			data.balance = "0";
			data.denomination = "NGN";
			data.createdAt = Date.now();
			data.updatedAt = Date.now();
			let wallet = await _wallets.insertOne(data);
			if (wallet.insertedId) {
				return await this.findOne({ _id: ObjectId(wallet.insertedId) });
			}
			return false;
		},

		async updateOne(query, data) {
			data.updatedAt = Date.now();
			let update = await _wallets.updateOne(query, { $set: data });
			if (update.result.ok) {
				return await this.findOne(query);
			}
			return false;
		},
	};
};

export default wallets;
