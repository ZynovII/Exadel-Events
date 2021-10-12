import { Request, Response, NextFunction } from 'express';

import { log } from '../logger/logger';
import userService, { UserService } from './user.service';

export class UserController {
  constructor(private readonly _service: UserService) {}

  createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = await this._service.createUser(req.body);
      return res.send(data);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.getAllUsers();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.getUserById(req.params.id);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.deleteUser(req.params.id);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.updateUser(req.params.id, req.body.User);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new UserController(userService);
