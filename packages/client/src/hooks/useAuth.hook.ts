import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import { AuthService } from '../http/auth/auth.service';
import { LocalStorageService } from '../storage/localStorage/localStorage.service';
import { useStore } from './useStore.hook';

export const useAuth = () => {
  const { state, dispatch } = useStore();

  const signIn = async (creds: SignInCredentialsDto) => {
    const token = await AuthService.signIn(creds);
    console.log('responce', token);

    // LocalStorageService.setToken(token)
  };

  const signUp = async (creds: SignUpCredentialsDto) => {
    const token = await AuthService.signUp(creds);
    console.log(token);

    // LocalStorageService.setToken(token)
  };

  const signOut = () => {
    console.log('Sign Out');
  };

  return {
    signIn,
    signOut,
    signUp,
    isAuth: state.isAuth,
  };
};
