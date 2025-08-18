import { Router} from "express";
import multer from "multer";
import path from "node:path";

import {authMiddleware} from "../middleware/auth.middleware";
import {createTask, deleteTask, getAllTasks, getUserTasks, updateTask} from "../controllers/task.controller";
import {Users} from "../ constants/enums";

const taskRouter = Router();
const uploadDir = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});
const upload = multer({ storage });

taskRouter.get('/', authMiddleware(Users.ADMIN),getAllTasks);

taskRouter.get('/get-tasks',authMiddleware(Users.USER),getUserTasks);
taskRouter.post('/create-task', authMiddleware(Users.USER), upload.array("attachments"), createTask);

taskRouter.put('/update-task/:id', authMiddleware(Users.USER), upload.array("attachments"), updateTask);
taskRouter.delete('/delete-task/:id', authMiddleware(Users.USER), deleteTask);

export default taskRouter;