import { AuthService } from '../http/auth/auth.service';
import { SignInCredentials } from '../types/signin.type';
import { SignUpCredentials } from '../types/signup.type';
import { useStore } from './useStore.hook';

export const useAuth = () => {
  const { state, dispatch } = useStore();

  const signIn = (creds: SignInCredentials) => {
    AuthService.signIn(creds);
  };

  const signUp = (creds: SignUpCredentials) => {
    AuthService.signUp(creds);
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
