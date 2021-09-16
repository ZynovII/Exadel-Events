import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../error-handler/CustomError';

export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong. Please try again.';

  res.status(status).send({ message, status });
};
