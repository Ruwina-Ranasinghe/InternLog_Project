import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  _id: any;
  name: string;
  email: string;
  password: string;
  createdAt: any;
  updatedAt: any;
  __v: any;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: Schema.Types.String,
      required: [true, "Name is required"],
    },
    email: {
      type: Schema.Types.String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export const User = model<IUser | any>("User", UserSchema);
