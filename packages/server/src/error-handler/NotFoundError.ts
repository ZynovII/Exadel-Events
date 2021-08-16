import { CustomError } from './CustomError';

export class NotFoundError extends CustomError {
  constructor(entity: string) {
    super(`${entity} not found`, 404);
  }
}
