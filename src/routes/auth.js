/*
 * filename - auth.js
 * The Authentication route
 * @param {Object} router - This is the router object, used to registered routes as provided by express
 * @param {Object|Any} authUser - The authentication middleware used to protect routes, injected as a dependency
 * @param {Object} authController - The authentication controller
 *
 * @return {object}
 *
 */

const authRoutes = ({ router, authUser, authController }) => {
	/**
	 * @api {post} /auth/register Register a new user
	 * @apiVersion 1.0.0
	 * @apiName Register a new user
	 * @apiGroup Authentication
	 *
	 * @apiParam (Request body) {String} name The full name of the user
	 * @apiParam (Request body) {String} email The email of the user
	 * @apiParam (Request body) {String} password The password of the user
	 *
	 * @apiSuccess (Success 201) {String} message User registered
	 *
	 * @apiSuccessExample {json} Success response
	 * HTTPS 201 Created
	 * {
	 *	 "success": true,
	 *	 "message": "User registered",
	 *   "data": { "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM1MjJiZDM0OWNmZTMzOGQzYTgzMDQiLCJuYW1lIjoiQWJkdWxyYWhtYW4iLCJlbWFpbCI6ImFiZHVscmFobWFueXVzdWYxMjZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MDY3ODQ2MjEsImV4cCI6MTYwNzA0MzgyMX0.L6fwqDCHh4po4FLudbgwI106ZomqOuE_LXmKUZPNx0Y" },
	 * 	 "status": 201
	 *  }
	 *
	 * @apiErrorExample {json} Error Example
	 * HTTPS 400 Bad Request
	 * {
	 *	 "success": false,
	 *   "message": "The request you sent to the server was bad",
	 *	 "data": { "error": "Email already registered" },
	 *	 "status": 400
	 * }
	 *
	 */
	router.post("/register", authController.registerUser);

	/**
	 * @api {post} /auth/login Login a new user
	 * @apiVersion 1.0.0
	 * @apiName Login a new user
	 * @apiGroup Authentication
	 *
	 * @apiParam (Request body) {String} email The email of the user
	 * @apiParam (Request body) {String} password The password of the user
	 *
	 * @apiSuccess (Success 201) {String} message User loggedin
	 *
	 * @apiSuccessExample {json} Success response
	 * HTTPS 200 OK
	 * {
	 *	 "success": true,
	 *	 "message": "User loggedin",
	 *   "data": { "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM1MjJiZDM0OWNmZTMzOGQzYTgzMDQiLCJuYW1lIjoiQWJkdWxyYWhtYW4iLCJlbWFpbCI6ImFiZHVscmFobWFueXVzdWYxMjZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MDY3ODQ2MjEsImV4cCI6MTYwNzA0MzgyMX0.L6fwqDCHh4po4FLudbgwI106ZomqOuE_LXmKUZPNx0Y" },
	 * 	 "status": 200
	 *  }
	 *
	 * @apiErrorExample {json} Error Example
	 * HTTPS 400 Bad Request
	 * {
	 *	 "success": false,
	 *   "message": "The request you sent to the server was bad",
	 *	 "data": { "error": "Email does not exist" },
	 *	 "status": 400
	 * }
	 *
	 */
	router.post("/login", authController.loginUser);
	router.post("/requestEmailOtp", authUser, authController.requestEmailOtp);
	router.post("/verifyEmailOtp", authUser, authController.verifyEmailOtp);

	return router;
};

export default authRoutes;
