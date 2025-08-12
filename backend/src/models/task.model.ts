import mongoose, { Document, Schema } from "mongoose";
import {IUser} from "./user.model";

export interface ITask extends Document {
    _id: any;
    user: IUser;
    task_name: string;
    status: string;
    description: string;
    date: Date;
}

const taskSchema = new Schema<ITask>({
   user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required"]
    },
    task_name: {
        type: Schema.Types.String,
        required: [true, "task_name is required"]
    },
    status: {
        type: Schema.Types.String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },
    description: {
        type: Schema.Types.String
    },
    date: {
        type: Schema.Types.Date,
        default: Date.now
    }
});

export default mongoose.model<ITask>("Task", taskSchema);
