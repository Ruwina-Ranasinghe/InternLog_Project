import {NextFunction,Response} from "express";
import {IRequest} from "../ constants/request";
import {InfoMessages} from "../ constants/messages";
import {getAllUsersService} from "../services/user.service";

export const getAllUsers = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log(InfoMessages.USER_FETCHING_STARTED);
        const data = await getAllUsersService();
        console.log(InfoMessages.USER_FETCHING_SUCCESSFUL);
        res.send(data);
    } catch (e) {
        next(e);
    }
};