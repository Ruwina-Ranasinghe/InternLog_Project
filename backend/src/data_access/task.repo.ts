import {ITask, Task} from "../models/task.model";
import mongoose from "mongoose";

export const createTaskRepo = (data: any) => {
    return new Task(data).save();
};

export const getTasksRepo = (filters: any)=>{
    return Task.find(filters)
        .populate("user", "name email")
        .exec();
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
            if (item._id === "todo") counts.todo = item.count;
        });

        return counts;
    } catch (error) {
        throw new Error(`Failed to fetch task status counts:`);
    }
};

export const getTaskPriorityCountsRepo = async () => {
    try {
        console.log("Fetching priority counts from DB...");

        const results = await Task.aggregate([
            {
                $match: { priority: { $exists: true, $ne: null } }
            },
            {
                $group: {
                    _id: "$priority",
                    count: { $sum: 1 }
                }
            }
        ]);

        console.log("Raw counts from DB:", results);

        const counts = {
            High: 0,
            Medium: 0,
            Low: 0
        };

        results.forEach(item => {
            if (item._id === 'High') counts.High = item.count;
            if (item._id === 'Medium') counts.Medium = item.count;
            if (item._id === 'Low') counts.Low = item.count;
        });

        console.log('Priority counts:', counts);
        return counts;
    } catch (error: unknown) {
        let errorMessage = "Failed to fetch task priority counts";
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`;
        }
        console.error("Error in getTaskPriorityCountsRepo:", error);
        throw new Error(errorMessage);
    }
};

export const getAllUsersTaskStatusCountsRepo = async () => {
    try {
        console.log("Fetching all users task status counts from DB...");

        const results = await Task.aggregate([
            {
                $match: { status: { $exists: true, $ne: null } } // Exclude null/undefined
            },
            {
                $group: {
                    _id: "$status",  // Keep original case
                    count: { $sum: 1 }
                }
            }
        ]);

        console.log("Raw all users status counts from DB:", results);

        const counts = {
            completed: 0,
            inProgress: 0,
            todo: 0
        };

        results.forEach(item => {
            if (item._id === 'completed') counts.completed = item.count;
            if (item._id === 'in-progress') counts.inProgress = item.count;
            if (item._id === 'todo') counts.todo = item.count;
        });

        console.log('All users task status counts:', counts);
        return counts;
    } catch (error: unknown) {
        let errorMessage = "Failed to fetch all users task status counts";
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`;
        }
        console.error("Error in getAllUsersTaskStatusCountsRepo:", error);
        throw new Error(errorMessage);
    }
};