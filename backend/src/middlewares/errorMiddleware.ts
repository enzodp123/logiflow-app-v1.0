// src/middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    ok: false,
    error: {
      message: err.message || 'Error interno del servidor',
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    },
  });
};

export default errorMiddleware;
