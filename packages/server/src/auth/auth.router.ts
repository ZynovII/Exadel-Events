import { Router } from 'express';
import authController from './auth.controller';

export const authRouter = Router();

authRouter.post('/signin', authController.signIn);

authRouter.post('/signup', authController.signUp);

authRouter.post('/signout', authController.signOut);
