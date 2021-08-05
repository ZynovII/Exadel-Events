import { Model } from 'mongoose';
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
    return this._model.findOne({ id });
  }

  async deleteUser(id: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ id }, (err) => {
      response = err.message;
    });
    return response;
  }

  async updateUser(id: string, payload: CreateUserDto): Promise<CreateUserDto> {
    return this._model.findByIdAndUpdate(id, payload);
  }
}
