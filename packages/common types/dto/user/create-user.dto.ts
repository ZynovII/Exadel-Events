import { UserRoles } from './user-role.enum';

export interface CreateUserDto {
  userName: string;
  email: string;
  additionalData: any;
  role: UserRoles;
}
