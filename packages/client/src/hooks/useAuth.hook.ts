import { useHistory } from 'react-router';
import { SignInCredentialsDto } from '../../../common types/dto/auth/sign-in.dto';
import { SignUpCredentialsDto } from '../../../common types/dto/auth/sign-up.dto';
import { HTTPError } from '../error-handler/error-handler';
import { AuthService } from '../http/auth/auth.service';
import { ActionTypes } from '../storage/context/action.types';
import { LocalStorageService } from '../storage/localStorage/localStorage.service';
import { useMyTheme } from './useMyTheme.hook';
import { useStore } from './useStore.hook';

export const useAuth = () => {
  const { state, dispatch } = useStore();
  const { setTheme } = useMyTheme();
  const history = useHistory();

  const signIn = async (creds: SignInCredentialsDto) => {
    const data = await AuthService.signIn(creds);

    if (!(data instanceof HTTPError)) {
      const user = { username: data.user.username, isAdmin: data.user.isAdmin };
      dispatch({ type: ActionTypes.SET_USER, payload: user });
      data.user.isDefaultTheme !== undefined &&
        setTheme(data.user.isDefaultTheme);
      LocalStorageService.setToken(data.token);
      history.push('/');
    } else {
      return data.message;
    }
  };

  const signUp = async (creds: SignUpCredentialsDto) => {
    const data = await AuthService.signUp(creds);
    if (!(data instanceof HTTPError)) {
      const user = { username: data.user.username, isAdmin: data.user.isAdmin };
      dispatch({ type: ActionTypes.SET_USER, payload: user });
      setTheme(data.user.isDefaultTheme);
      LocalStorageService.setToken(data.token);
      history.push('/');
    } else {
      return data.message;
    }
  };

  const signOut = () => {
    dispatch({ type: ActionTypes.REMOVE_USER });
    LocalStorageService.removeToken();
    history.push('/');
  };

  return {
    signIn,
    signOut,
    signUp,
    isAuth: state.isAuth,
  };
};
