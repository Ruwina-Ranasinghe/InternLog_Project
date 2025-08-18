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

export const getTaskStatusCountsRepo = async (userId: string | mongoose.Types.ObjectId) => {
    try {
        const rawCounts = await Task.aggregate([
            { $match: { user: new mongoose.Types.ObjectId(userId) } },
            { $group: { _id: "$status", count: { $sum: 1 } } },
        ]);

        const counts = {
            completed: 0,
            inProgress: 0,
            todo: 0
        };

        rawCounts.forEach((item: { _id: string; count: number }) => {
            if (item._id === "completed") counts.completed = item.count;
            if (item._id === "in-progress") counts.inProgress = item.count;
            if (item._id === "todo") counts.todo = item.count; // Now using "todo" directly
        });

        return counts;
    } catch (error) {
        throw new Error(`Failed to fetch task status counts:`);
    }
};
