import { model, Schema, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoles } from './user-role.enum';

const schemaUser = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: UserRoles },
  additionalData: { type: JSON },
  applicants: [
    {
      type: Types.ObjectId,
      ref: 'Applicants',
    },
  ],
});

export const UserModel = model<CreateUserDto>('User', schemaUser);
