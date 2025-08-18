import {User} from "../models/user.model";
import {Users} from "../ constants/enums";

export const findOneUserRepo = (filters: any) => {
    return User.findOne(filters).exec();
};

export const createUserRepo = (data:any) => {
    return new User(data).save();
};

export const getAllUsersRepo = () => {
    return User.find({isAdmin: false}, "name email role").exec();
};

