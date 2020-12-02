/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import mongodb from "mongodb";
import makeConnection from "./connection.js";
import _users from "./users.js";
import _wallets from "./wallets.js";

const { MongoClient, ObjectId } = mongodb;

const connection = await makeConnection({ MongoClient });
const database = connection.db(process.env.DB_NAME);

// Initialize collections
const users = await _users({ database, ObjectId });
const wallets = await _wallets({ database, ObjectId });

export { connection, users, ObjectId, wallets };
