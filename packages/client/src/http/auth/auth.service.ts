import axios from 'axios';
import { SignInResponseDto } from '../../../../common types/dto/auth/sign-in-response.dto';
import { SignInCredentialsDto } from '../../../../common types/dto/auth/sign-in.dto';
import { SignUpResponseDto } from '../../../../common types/dto/auth/sign-up-response.dto';
import { SignUpCredentialsDto } from '../../../../common types/dto/auth/sign-up.dto';
import { errorHandler, HTTPError } from '../../error-handler/error-handler';
import { API_URL } from '../../utils/constants';

export class AuthService {
  static async signIn(
    creds: SignInCredentialsDto
  ): Promise<SignInResponseDto | any> {
    try {
      const response = await axios.post<SignInResponseDto>(
        `${API_URL}/signin`,
        creds
      );
      return response.data;
    } catch (err: any) {
      errorHandler(err.response);
      return new HTTPError(err.response.data.message, err.response.status);
    }
  }
  static async signUp(
    creds: SignUpCredentialsDto
  ): Promise<SignUpResponseDto | HTTPError> {
    try {
      const { data } = await axios.post(`${API_URL}/signup`, creds);
      return data;
    } catch (err: any) {
      errorHandler(err);
      return new HTTPError(err.message, err.status);
    }
  }
}
