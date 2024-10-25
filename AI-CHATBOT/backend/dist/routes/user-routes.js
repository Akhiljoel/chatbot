import { Router } from "express";
import { getAllUsers, userlogin, usersignup } from "../controllers/user-controllers.js";
import { loginvalidator, signupvalidator, validate } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupvalidator), usersignup);
userRoutes.post("/signin", validate(loginvalidator), userlogin);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map