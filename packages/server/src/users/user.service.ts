import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
import { DELETED } from '../utils/constants';
import { CreateUserDto } from '../../../common types/dto/user/create-user.dto';
import { User } from '../../../common types/dto/user/user.type';

export class UserService {
  constructor(private readonly _model: Model<User>) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const newUser = new this._model(data);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this._model.find();
  }

  async getUserById(id: string): Promise<User> {
    try {
      const result = await this._model.findOne({ id });
      if (result === null) {
        throw new NotFoundError('User');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async deleteUser(id: string): Promise<string> {
    try {
      await this._model.remove(await this.getUserById(id));
      return DELETED;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async updateUser(id: string, payload: CreateUserDto): Promise<User> {
    try {
      const result = await this._model.findByIdAndUpdate(id, payload);
      if (result === null) {
        throw new NotFoundError('User');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }
}
