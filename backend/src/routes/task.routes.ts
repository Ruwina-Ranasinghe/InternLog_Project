import { Router} from "express";
import {authMiddleware} from "../middleware/auth.middleware";
import * as taskController from "../controllers/task.controller";


const taskRouter = Router();

taskRouter.get('/', authMiddleware("admin"),taskController.getAllTasks);

taskRouter.get('/get-tasks',authMiddleware("user"),taskController.getUserTasks);
taskRouter.post('/create-task',authMiddleware("user"),taskController.createTask);
taskRouter.put('/update-task/:id', authMiddleware("user"), taskController.updateTask);
taskRouter.delete('/delete-task/:id', authMiddleware("user"), taskController.deleteTask);

export default taskRouter;