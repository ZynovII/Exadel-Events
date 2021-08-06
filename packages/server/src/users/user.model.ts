import { model, Schema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

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

export const UserModel = model<CreateUserDto>('User', schemaUser);
