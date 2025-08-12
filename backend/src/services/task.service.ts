import Task, { ITask } from "../models/task.model";
import mongoose from "mongoose";


export const createTaskService = async (
    userId: mongoose.Types.ObjectId,
    taskData: Partial<ITask>
) => {
    const task = new Task({
        user: userId,
        ...taskData
    });
    return await task.save();
};

export const getUserTasksService = async (userId: mongoose.Types.ObjectId) => {
    return await Task.find({ user: userId });
};

export const getAllTasksService = async () => {
    return await Task.find().populate("user", "name email");
};

export const updateTaskService = async (
    userId: mongoose.Types.ObjectId,
    taskId: string,
    updateData: Partial<ITask>
) => {
    return await Task.findOneAndUpdate(
        { _id: taskId, user: userId },
        updateData,
        { new: true }
    );
};

export const deleteTaskService = async (
    userId: mongoose.Types.ObjectId,
    taskId: string
) => {
    return await Task.findOneAndDelete({ _id: taskId, user: userId });
};
