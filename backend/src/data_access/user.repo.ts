import {User} from "../models/user.model";

export const findOneUserRepo = (filters: any) => {
    return User.findOne(filters).exec();
};

export const createUserRepo = (data:any) => {
    return new User(data).save();
}

