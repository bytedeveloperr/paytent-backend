/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import makeAuthUser from "./authUser.js";
import jwt from "jsonwebtoken";
import response from "../helpers/response.js";
import { users } from "../database/index.js";

const authUser = makeAuthUser({ response, jwt, users });

export { authUser };
