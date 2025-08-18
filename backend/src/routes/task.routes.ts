import { Router} from "express";
import {authMiddleware} from "../middleware/auth.middleware";
import {
    createTask,
    deleteTask,
    getAllTasks,
<<<<<<< Updated upstream
    getTaskStatusCounts,
    getUserTasks,
=======
    getUserTasks,
    getUserTasksByAdmin,
>>>>>>> Stashed changes
    updateTask
} from "../controllers/task.controller";
import {Users} from "../ constants/enums";

const taskRouter = Router();

taskRouter.get('/', authMiddleware(Users.ADMIN),getAllTasks);
taskRouter.get('/user/:id', authMiddleware(Users.ADMIN),getUserTasksByAdmin);

taskRouter.get('/get-tasks',authMiddleware(Users.USER),getUserTasks);
taskRouter.post('/create-task',authMiddleware(Users.USER),createTask);
taskRouter.put('/update-task/:id', authMiddleware(Users.USER),updateTask);
taskRouter.delete('/delete-task/:id', authMiddleware(Users.USER), deleteTask);
taskRouter.get('/status-counts', authMiddleware(Users.USER), getTaskStatusCounts);

export default taskRouter;