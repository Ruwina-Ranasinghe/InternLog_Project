import { Router} from "express";
import * as taskController from "../controllers/task.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const taskRouter = Router();

taskRouter.get('/',authMiddleware("user"),taskController.getAllTasks);
taskRouter.post('/create-task',authMiddleware("user"),taskController.createTask);
taskRouter.put('/update-task/:id',authMiddleware("user"), taskController.updateTask);
taskRouter.delete('/delete-task/:id',authMiddleware("user"), taskController.deleteTask);

taskRouter.get("/admin/tasks", authMiddleware("admin"), taskController.getAllTasksForAdmin);

export default taskRouter;
