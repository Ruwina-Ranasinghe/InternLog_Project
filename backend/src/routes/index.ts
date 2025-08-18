import { Express } from "express";
import authRouter from "./auth.routes";
import taskRouter from "./task.routes";
import userRouter from "./user.routes";


export const routes = (app: Express) => {
    app.use('/api/auth', authRouter);
    app.use('/api/tasks', taskRouter);
    app.use('/api/user', userRouter);
};
