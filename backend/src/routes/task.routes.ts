import { Router} from "express";
import * as taskController from "../controllers/task.controller";


const taskRouter = Router();

taskRouter.get('/',taskController.getAllTasks);
taskRouter.post('/create-task',taskController.createTask);
taskRouter.put('/update-task/:id', taskController.updateTask);
taskRouter.delete('/delete-task/:id', taskController.deleteTask);

export default taskRouter;
