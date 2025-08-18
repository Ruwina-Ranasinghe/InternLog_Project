import {getAllUsersRepo} from "../data_access/user.repo";

export const getAllUsersService = () => {
    return getAllUsersRepo();
};