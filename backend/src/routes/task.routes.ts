import { Router} from "express";
import {authMiddleware} from "../middleware/auth.middleware";
import {
    createTask,
    deleteTask,
    getAllTasks, getAllUsersTaskStatusCounts,
    getTaskPriorityCounts,
    getTaskStatusCounts,
    getUserTasks,
    getUserTasksByAdmin,
    updateTask
} from "../controllers/task.controller";
import {FileFields, Users} from "../constants/enums";
import {upload} from "../middleware/upload.middleware";

const taskRouter = Router();
taskRouter.get('/', authMiddleware(Users.ADMIN),getAllTasks);
taskRouter.get('/user/:id', authMiddleware(Users.ADMIN),getUserTasksByAdmin);
taskRouter.get('/priority-counts', authMiddleware(Users.ADMIN), getTaskPriorityCounts);
taskRouter.get('/all-users-status-counts', authMiddleware(Users.ADMIN), getAllUsersTaskStatusCounts);

taskRouter.get('/get-tasks',authMiddleware(Users.USER),getUserTasks);
taskRouter.post('/create-task', authMiddleware(Users.USER), upload.array(FileFields.ATTACHMENTS), createTask);
taskRouter.put('/update-task/:id', authMiddleware(Users.USER), upload.array(FileFields.ATTACHMENTS), updateTask);
taskRouter.delete('/delete-task/:id', authMiddleware(Users.USER), deleteTask);
taskRouter.get('/status-counts', authMiddleware(Users.USER), getTaskStatusCounts);

export default taskRouter;