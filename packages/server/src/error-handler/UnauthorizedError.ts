import { CustomError } from './CustomError';

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(`${message} bad request`, 401);
  }
}
