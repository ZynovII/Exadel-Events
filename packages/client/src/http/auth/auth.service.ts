import axios from 'axios';
import { SignInCredentialsDto } from '../../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../../common types/dto/auth/sign-up.dto';
import { errorHandler } from '../../error-handler/error-handler';
import { API_URL } from '../../utils/constants';

export class AuthService {
  static async signIn(creds: SignInCredentialsDto) {
    try {
      return (await axios.post(`${API_URL}/signin`, creds)).data;
    } catch (err) {
      errorHandler(err);
    }
  }
  static async signUp(creds: SignUpCredentialsDto) {
    try {
      return (await axios.post(`${API_URL}/signup`, creds)).data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
