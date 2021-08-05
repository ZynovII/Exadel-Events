import { UserRoles } from '../user-role.enum';

export interface CreateUserDto {
  userName: string;
  email: string;
  additionalData: JSON;
  role: UserRoles;
}
