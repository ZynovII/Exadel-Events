import { Router } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from './user.model';

export const userRouter = Router();

const userController = new UserController(new UserService(UserModel));

userRouter.get('/user', userController.getAllUsers);
userRouter.get('/user/:id', userController.getUserById);
userRouter.post('/user', userController.createUser);
userRouter.delete('/user/:id', userController.deleteUser);
userRouter.put('/user', userController.updateUser);
