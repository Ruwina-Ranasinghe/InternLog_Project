import {NextFunction,Response} from "express";
import {
    createTaskService,
    getUserTasksService,
    getAllTasksService,
    updateTaskService, deleteTaskService, getTaskStatusCountsService, getTasksByUserService,
} from "../services/task.service";

import {IRequest} from "../constants/request";
import {ErrorMessages, HttpCodes, InfoMessages} from "../constants/messages";

export const createTask = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_CREATION_STARTED);
        const data = await createTaskService({ ...req.body, user: req.user?.id });
        console.log(InfoMessages.TASK_CREATION_SUCCESSFUL);
        res.send(data);
    } catch (e) {
        next(e);
    }
};

export const getUserTasks = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_FETCHING_STARTED);
        const data = await getUserTasksService(req.user.id);
        console.log(InfoMessages.TASK_FETCHING_SUCCESSFUL);
        res.send(data);
    } catch (e) {
        next(e)
    }
};

export const getAllTasks = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_FETCHING_STARTED_BY_ADMIN);
        const data = await getAllTasksService();
        console.log(InfoMessages.TASK_FETCHING_SUCCESSFUL_BY_ADMIN);
        res.send(data);
    } catch (e) {
        next(e);
    }
};

export const updateTask = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_UPDATING_STARTED);
        const data = await updateTaskService(
            req.user.id,
            req.params.id,
            req.body
        );
        if (!data) {
            return res.status(HttpCodes.NOT_FOUND).json({
                message: ErrorMessages.TASK_NOT_FOUND
            });
        }
        console.log(InfoMessages.TASK_UPDATED);
        res.send(data);
    } catch (e) {
        next(e);
    }
};

export const deleteTask = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_DELETING_STARTED);
        const data = await deleteTaskService(
            req.user.id,
            req.params.id,
        );
        if (!data) {
            return res.status(HttpCodes.NOT_FOUND).json({
                message: ErrorMessages.TASK_NOT_FOUND
            });
        }
        res.json({ message: InfoMessages.TASK_DELETE_SUCCESSFUL });
    } catch (e) {
        next(e);
    }

};

export const getTaskStatusCounts = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_STATUS_FETCHING_STARTED);

        if (!req.user || !req.user.id) {
            return res.status(HttpCodes.UNAUTHORIZED).json({
                success: false,
                message: "User authentication required"
            });
        }

        const counts = await getTaskStatusCountsService(req.user.id);

        console.log(InfoMessages.TASK_STATUS_FETCHED);
        res.status(HttpCodes.OK).json({
            success: true,
            data: counts,
            message: "Task status counts fetched successfully"
        });
    } catch (error) {
        console.error("Error fetching task status counts:", error);
        next(error);

    }
};

export const getUserTasksByAdmin = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.TASK_FETCHING_STARTED_BY_ADMIN);
        const data = await getTasksByUserService(req.params.userId);
        console.log(InfoMessages.TASK_FETCHING_SUCCESSFUL_BY_ADMIN);
        res.send(data);
    } catch (e) {
        next(e);
    }
};