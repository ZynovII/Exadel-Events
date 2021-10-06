import axios from 'axios';
import { SignInCredentialsDto } from '../../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../../common types/dto/auth/sign-up.dto';
import { errorHandler } from '../../error-handler/error-handler';

export class AuthService {
  static async signIn(creds: SignInCredentialsDto) {
    try {
      return (await axios.post(`/signin`, creds)).data;
    } catch (err) {
      errorHandler(err);
    }
  }
  static async signUp(creds: SignUpCredentialsDto) {
    try {
      return (await axios.post(`/signup`, creds)).data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
