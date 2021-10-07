import { Model } from 'mongoose';
import { NotFoundError } from '../error-handler/NotFoundError';
import { DELETED } from '../utils/constants';
import { CreateUserDto } from '../../../common types/dto/user/create-user.dto';
import { User } from '../../../common types/dto/user/user.type';
import { UserDocument, UserModel } from './user.model';
import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { UnauthorizedError } from '../error-handler/UnauthorizedError';

export class UserService {
  constructor(private readonly _model: Model<UserDocument>) {}

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

  async validatePassword(creds: SignInCredentialsDto): Promise<UserDocument> {
    const user = await this._model.findOne({ email: creds.email });
    if (!user) throw new NotFoundError('User');
    const isValid = user.comparePassword(creds.password);
    if (!isValid) throw new UnauthorizedError('Invalid email or password');
    return user;
  }
}

export default new UserService(UserModel);
