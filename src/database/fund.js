/*
 * filename - users.js
 * This provides some kind of helpers around MongoDB to interact with the users collection
 * @param {Object} database - This is the database object
 * @param {} ObjectId - The MongoDB function that helps convert datatypes to ObjectId type
 * @return {Object}
 *
 */

const fund = async ({ database, ObjectId }) => {
	const _funds = database.collection("users");
	return {
		async findOne(query) {
			let user = await _users.findOne(query);
			return user;
		},

		async find(query) {
			let users = await _users.find(query);
			return users;
		},

		async create(data) {
			data.createdAt = Date.now();
			data.updatedAt = Date.now();
			let users = await _users.insertOne(data);
			if (users.insertedId) {
				return await this.findOne({ _id: ObjectId(users.insertedId) });
			}
			return false;
		},

		async updateOne(query, data) {
			data.updatedAt = Date.now();
			let update = await _users.updateOne(query, { $set: data });
			if (update.result.ok) {
				return await this.findOne(query);
			}
			return false;
		},
	};
};

export default fund;
