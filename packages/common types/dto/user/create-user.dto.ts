export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isDefaultTheme: boolean;
}
