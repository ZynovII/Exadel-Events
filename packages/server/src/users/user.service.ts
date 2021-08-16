import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
import { DELETED } from '../utils/constants';
import { CreateUserDto } from './dto/create-user.dto';

export class UserService {
  constructor(private readonly _model: Model<CreateUserDto>) {}

  async createUser(data: CreateUserDto): Promise<CreateUserDto> {
    const newUser = new this._model(data);
    return newUser.save();
  }

  async getAllUsers(): Promise<CreateUserDto[]> {
    return this._model.find();
  }

  async getUserById(id: string): Promise<CreateUserDto> {
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

  async updateUser(id: string, payload: CreateUserDto): Promise<CreateUserDto> {
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
