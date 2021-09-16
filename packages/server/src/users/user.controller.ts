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
      const data = req.body;
      await this._service.createUser(data);
      return res.send(data);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllUsers();
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getUserById(req.params.id);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteUser(req.params.id);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.updateUser(req.params.id, req.body.User);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };
}

export default new UserController(userService);
