import { Request, Response, NextFunction } from 'express';

export const responseFormatter = (req: Request, res: Response, next: NextFunction) => {
    const oldJson = res.json;

    (res as any).json = function (data: any) {
        const formattedResponse = {
            status: res.statusCode < 400 ? 'success' : 'error',
            data: res.statusCode < 400 ? data : null,
            message: res.statusCode >= 400 ? data.message : ''
        };
        oldJson.call(this, formattedResponse);
    };

    next();
};