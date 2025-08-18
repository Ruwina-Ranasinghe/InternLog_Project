import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.model";

export interface ITask extends Document {
    _id: any;
    user: IUser;
    task_name: string;
    status: string;
    description: string;
    date: Date;
    priority: "Low" | "Medium" | "High"; // New field
    dueDate?: Date; // Optional due date
    attachments?: string[]; // Store file paths/URLs
}

const TaskSchema = new Schema<ITask>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required"],
    },
    task_name: {
        type: Schema.Types.String,
        required: [true, "task_name is required"],
    },
    status: {
        type: Schema.Types.String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },
    description: {
        type: Schema.Types.String,
    },
    date: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    priority: {
        type: Schema.Types.String,
        enum: ["Low", "Medium", "High"],
        default: "Low",
    },
    dueDate: {
        type: Schema.Types.Date,
    },
    attachments: [
        {
            type: Schema.Types.String, // Store file name, path, or URL
        },
    ],
});

export const Task = mongoose.model<ITask>("Task", TaskSchema);
