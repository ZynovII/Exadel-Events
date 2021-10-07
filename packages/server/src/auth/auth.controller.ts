import { Request, Response, NextFunction } from 'express';
import { log } from '../logger/logger';

import authService, { AuthService } from './auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  signIn = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const result = this.authService.signIn(req.body);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
  signUp = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const result = this.authService.signUp(req.body);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
  signOut = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const result = this.authService.signOut();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new AuthController(authService);
