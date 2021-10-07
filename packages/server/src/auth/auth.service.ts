import jwt from 'jsonwebtoken';

import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import userService, { UserService } from '../users/user.service';

export class AuthService {
  constructor(private userService: UserService) {}
  async signIn(creds: SignInCredentialsDto) {
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
    return { creds, token };
  }
  signUp(creds: SignUpCredentialsDto) {
    return { creds, token: 'token' };
    //this.userService.createUser(creds);
  }
  signOut() {
    return 'sign out';
  }
}

export default new AuthService(userService);
