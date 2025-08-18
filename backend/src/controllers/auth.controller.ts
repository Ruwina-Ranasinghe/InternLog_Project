import {NextFunction, Request, Response} from 'express';
import {IRequest} from "../constants/request";
import {loginUserService, registerUserService} from "../services/auth.service";
import {InfoMessages} from "../constants/messages";

export const register = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    console.log(InfoMessages.USER_REGISTRATION_STARTED)
    const data = await registerUserService(req.body);
    console.log(InfoMessages.USER_REGISTRATION_SUCCESSFUL)
    res.send(data);
  } catch (e) {
    next(e);
  }
};

export const login = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    console.log(InfoMessages.USER_LOGIN_STARTED)
    const data = await loginUserService(req.body);
    console.log(InfoMessages.USER_LOGIN_SUCCESSFUL)
    res.send(data);
  } catch (e) {
    next(e);
  }
};
