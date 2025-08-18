import { Request } from "express";

export interface IRequest extends Request {
    user?: any;
    task?: any;
    files?: any;
    log?: any;
}
