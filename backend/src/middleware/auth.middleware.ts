import { Request, Response, NextFunction } from 'express';
import {IRequest} from "../constants/request";
import {verifyToken} from "../util/jwt";

interface JwtPayload {
    id: string;
    isAdmin: boolean;
}

export const authMiddleware = (requiredRole?: 'admin' | 'user') => {
    return async (req: IRequest & { user?: JwtPayload }, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = verifyToken(token) as JwtPayload;
            req.user = decoded;

            // Role check
            if (requiredRole) {
                if (requiredRole === 'admin' && !decoded.isAdmin) {
                    return res.status(403).json({ message: 'Access denied: Admins only' });
                }
                if (requiredRole === 'user' && decoded.isAdmin) {
                    return res.status(403).json({ message: 'Access denied: Users only' });
                }
            }

            next();
        } catch (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
};
