import { ITask} from "../models/task.model";
import {
    createTaskRepo,
    deleteTaskRepo,
    getAllTasksRepo,
    getTasksRepo,
    getTaskStatusCountsRepo,
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

<<<<<<< Updated upstream
export const getTaskStatusCountsService = async (userId: string) => {
    try {
        return await getTaskStatusCountsRepo(userId);
    } catch (error) {
        throw error;
    }
=======
export const getTasksByUserService = (userId: string) => {
    return getTasksRepo({ user: userId });
>>>>>>> Stashed changes
};
