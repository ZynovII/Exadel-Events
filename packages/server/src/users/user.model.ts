import { Document, HookNextFunction, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import { User } from '../../../common types/dto/user/user.type';

export interface UserDocument extends User, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const SchemaUser = new Schema<UserDocument>({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  isDefaultTheme: Boolean,
  isAdmin: Boolean,
});

SchemaUser.pre('save', async function (next: HookNextFunction) {
  const user = this as UserDocument;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(10);

  const hash = bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

// Used for logging in
SchemaUser.methods.comparePassword = async function (candidatePassword: string) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

export const UserModel = model<UserDocument>('User', SchemaUser);
