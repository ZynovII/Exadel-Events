import { UserRoles } from './user-role.enum';

export type User = {
  _id: string;
  userName: string;
  email: string;
  additionalData: any;
  role: UserRoles;
};
