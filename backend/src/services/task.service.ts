import { ITask} from "../models/task.model";
import {
    createTaskRepo,
    deleteTaskRepo,
    getAllTasksRepo,
    getTasksRepo,
    updateTaskRepo
} from "../data_access/task.repo";

export const createTaskService = (data: any) => {
    return createTaskRepo(data);
};

export const getUserTasksService = (userId: string) => {
    return getTasksRepo({user: userId});
};

export const getAllTasksService = async () => {
    return getAllTasksRepo();
};

export const updateTaskService = (
    userId: string,
    taskId: string,
    updateData: Partial<ITask>
) => {
    return updateTaskRepo(userId, taskId, updateData);
};

export const deleteTaskService = async (
    userId: string,
    taskId: string
) => {
    return deleteTaskRepo(userId, taskId);
};
