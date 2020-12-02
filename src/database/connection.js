/*
 * filename - connection.js
 * The database connection file, connects to the MongoDB and exports the connection instance
 *
 */

/*
 * The database connection function
 * @param {Object} MongoClient - This is the MongoDB client that connects our application to MongoDB
 * @return {object}
 *
 */

const connection = async ({ MongoClient }) => {
	let options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		console.log("connected to MongoDB");
		return await MongoClient.connect(process.env.MONGO_URI, options);
	} catch (e) {
		throw e;
	}
};

export default connection;
