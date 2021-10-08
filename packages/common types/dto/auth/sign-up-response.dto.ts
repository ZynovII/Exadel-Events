import { UserResponseDto } from '../user/user-response.dto';

export type SignUpResponseDto = {
  user: UserResponseDto;
  token: string;
};
