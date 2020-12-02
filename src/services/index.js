/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import argon2 from "argon2";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken";
import callAuthService from "./authService.js";
import callWalletService from "./walletService.js";
import callDashboardService from "./dashboardService.js";
import response from "../helpers/response.js";
import { connection, users, wallets, ObjectId } from "../database/index.js";
import { validateRegistration, validateLogin } from "../validations/index.js";

const authService = callAuthService({
	response,
	users,
	jwt,
	validateRegistration,
	validateLogin,
	argon2,
	otpGenerator,
	ObjectId,
});
const walletService = callWalletService({ response, wallets, ObjectId });
const dashboardService = callDashboardService({
	response,
	users,
	wallets,
	ObjectId,
});

export { authService, walletService, dashboardService };
