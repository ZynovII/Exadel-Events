import { Model } from 'mongoose';
import { NotFoundError } from '../error-handler/NotFoundError';
import { DELETED } from '../utils/constants';
import { CreateUserDto } from '../../../common types/dto/user/create-user.dto';
import { User } from '../../../common types/dto/user/user.type';
import { UserModel } from './user.model';

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
    const result = await this._model.findOne({ id });
    if (result === null) {
      throw new NotFoundError('User');
    }
    return result;
  }

  async deleteUser(id: string): Promise<string> {
    await this._model.remove(await this.getUserById(id));
    return DELETED;
  }

  async updateUser(id: string, payload: CreateUserDto): Promise<User> {
    const result = await this._model.findByIdAndUpdate(id, payload);
    if (result === null) {
      throw new NotFoundError('User');
    }
    return result;
  }
}

export default new UserService(UserModel);
