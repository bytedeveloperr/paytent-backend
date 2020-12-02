import validator from "validator";
import { registerValidation, loginValidation } from "./auth.js";

const { isEmpty, isEmail, isLength } = validator;

const validateRegistration = registerValidation({ isEmpty, isEmail, isLength });
const validateLogin = loginValidation({ isEmpty, isEmail });

export { validateRegistration, validateLogin };
