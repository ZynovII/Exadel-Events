import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import userService, { UserService } from '../users/user.service';

export class AuthService {
  constructor(private userService: UserService) {}
  signIn(creds: SignInCredentialsDto) {}
  signUp(creds: SignUpCredentialsDto) {
    this.userService.createUser(creds);
  }
  signOut() {}
}

export default new AuthService(userService);
