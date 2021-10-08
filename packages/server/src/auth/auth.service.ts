import jwt from 'jsonwebtoken';
import { SignInResponseDto } from '../../../common types/dto/auth/sign-in-response.dto';

import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpResponseDto } from '../../../common types/dto/auth/sign-up-response.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import userService, { UserService } from '../users/user.service';

export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(creds: SignInCredentialsDto): Promise<SignInResponseDto> {
    const _user = await userService.validatePassword(creds);
    const { username, _id, isAdmin, isDefaultTheme } = _user;
    const user = {
      username,
      isAdmin,
      isDefaultTheme,
      _id,
    };
    const token = jwt.sign(user, process.env.JWT_SECRET_OR_KEY, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return { user, token };
  }

  async signUp(creds: SignUpCredentialsDto): Promise<SignUpResponseDto> {
    const _user = await this.userService.createUser(creds);
    const { password, ...user } = _user;
    const token = jwt.sign(user, process.env.JWT_SECRET_OR_KEY, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return { user, token };
  }

  signOut() {
    return 'sign out';
  }
}

export default new AuthService(userService);
