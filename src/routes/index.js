/*
 * filename - index.js
 * The imports dependencies and injects them into the appropiate dependents and exports the dependents
 *
 */

import authRoutes from "./auth.js";
import walletRoutes from "./wallet.js";
import dashboardRoutes from "./dashboard.js";
import {
	walletController,
	authController,
	dashboardController,
} from "../controllers/index.js";
import { authUser } from "../middlewares/index.js";

const routes = (router) => {
	router.use(
		"/dashboard",
		authUser,
		dashboardRoutes({ router, dashboardController })
	);
	router.use("/auth", authRoutes({ router, authUser, authController }));
	router.use(
		"/wallets",
		walletRoutes({ router, authUser, walletController })
	);

	return router;
};

export default routes;
