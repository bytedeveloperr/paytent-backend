/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import callAuthController from "./authController.js";
import callWalletController from "./walletController.js";
import callDashboardController from "./dashboardController.js";
import {
	authService,
	walletService,
	dashboardService,
} from "../services/index.js";

const authController = callAuthController({ authService });
const walletController = callWalletController({ walletService });
const dashboardController = callDashboardController({ dashboardService });

export { authController, walletController, dashboardController };
