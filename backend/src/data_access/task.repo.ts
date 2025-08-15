import {ITask, Task} from "../models/task.model";
import mongoose from "mongoose";

export const createTaskRepo = (data: any) => {
    return new Task(data).save();
};

export const getTasksRepo = (filters: any)=>{
    return Task.find(filters).exec();
}

export const getAllTasksRepo = () => {
    return Task.find({}).populate("user", "name email").exec();
}

export const updateTaskRepo = (
    userId: string | mongoose.Types.ObjectId,
    taskId: string,
    updateData: Partial<ITask>
) => {
    return Task.findOneAndUpdate(
        { _id: taskId, user: userId },
        updateData,
        { new: true }
    ).exec();
};

export const deleteTaskRepo =(
    userId: string,
    taskId: string
)  => {
    return Task.findOneAndDelete({ _id: taskId, user: userId }).exec();
}