import { Router } from 'express';
import userController from './user.controller';

export const userRouter = Router();

userRouter.get('/user', userController.getAllUsers);

userRouter.get('/user/:id', userController.getUserById);

userRouter.post('/user', userController.createUser);

userRouter.delete('/user/:id', userController.deleteUser);

userRouter.put('/user', userController.updateUser);
