import { model, Schema } from 'mongoose';
import { User } from '../../../common types/dto/user/user.type';

const schemaUser = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: Boolean,
  password: String,
  isDefaultTheme: Boolean,
});

export const UserModel = model<User>('User', schemaUser);
