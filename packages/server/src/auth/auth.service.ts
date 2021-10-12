import jwt from 'jsonwebtoken';
import { SignInResponseDto } from '../../../common types/dto/auth/sign-in-response.dto';

import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpResponseDto } from '../../../common types/dto/auth/sign-up-response.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import userService, { UserService } from '../users/user.service';

const secret = process.env.JWT_SECRET_OR_KEY || 'secret';
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
    const token = jwt.sign(user, secret, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return { user, token };
  }

  async signUp(creds: SignUpCredentialsDto): Promise<SignUpResponseDto> {
    const _user = await this.userService.createUser(creds);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, isAdmin, isDefaultTheme, username } = _user;
    const user = { _id, isAdmin, isDefaultTheme, username };
    const token = jwt.sign(user, secret, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return { user, token };
  }

  signOut(): string {
    return 'sign out';
  }
}

export default new AuthService(userService);
