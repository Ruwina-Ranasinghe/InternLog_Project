import { Express } from "express";
import authRouter from "./auth.routes";
import taskRouter from "./task.routes";


export const routes = (app: Express) => {
    app.use('/api/auth', authRouter);
    app.use('/api/tasks', taskRouter);
};
