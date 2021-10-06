import { Request, Response, NextFunction } from 'express';

import authService, { AuthService } from './auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  signIn = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    this.authService.signIn(req.body.user);
  };
  signUp = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    this.authService.signUp(req.body.user);
  };
  signOut = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    this.authService.signOut();
  };
}

export default new AuthController(authService);
