import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controllers.js";
import {loginvalidator,signupvalidator,validate} from "../utils/validator.js";
import { verifytoken } from "../utils/token-manager.js";

const userRoutes=Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup",validate(signupvalidator), userSignup);
userRoutes.post("/signin",validate(loginvalidator), userLogin);
userRoutes.get("/auth-status",verifytoken,verifyUser);
export default userRoutes;

