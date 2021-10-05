import { SignInCredentials } from '../../types/signin.type';
import { SignUpCredentials } from '../../types/signup.type';

export class AuthService {
  static signIn(creds: SignInCredentials) {
    console.log(creds);
  }
  static signUp(creds: SignUpCredentials) {
    console.log(creds);
  }
}
