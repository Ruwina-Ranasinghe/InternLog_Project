import {Router} from "express";
import {authMiddleware} from "../middleware/auth.middleware";
import {Users} from "../constants/enums";
import {getAllUsers} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/get-all-user', authMiddleware(Users.ADMIN),getAllUsers);

export default userRouter;