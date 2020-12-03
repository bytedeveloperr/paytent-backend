/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import callAuthController from "./authController.js";
import callWalletController from "./walletController.js";
import callDashboardController from "./dashboardController.js";
import callFundWalletController from "./fundController.js";
import {
	authService,
	walletService,
	dashboardService,
	fundWalletService
} from "../services/index.js";

const authController = callAuthController({ authService });
const walletController = callWalletController({ walletService });
const dashboardController = callDashboardController({ dashboardService });
const fundWalletController = callFundWalletController({ fundWalletService });

export { authController, walletController, dashboardController,fundWalletController };
