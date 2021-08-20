import { model, Schema } from 'mongoose';
import { User } from '../../../common types/dto/user/user.type';

const schemaUser = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  additionalData: Schema.Types.Mixed,
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Applicants',
    },
  ],
});

export const UserModel = model<User>('User', schemaUser);
