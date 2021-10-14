import { ActionTypes } from '../storage/context/action.types';
import { LocalStorageService } from '../storage/localStorage/localStorage.service';
import { useStore } from './useStore.hook';

export const useMyTheme = () => {
  const { state, dispatch } = useStore();
  const toggleTheme = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
    LocalStorageService.toggleTheme();
  };
  const setTheme = (value: boolean) => {
    dispatch({ type: ActionTypes.SET_THEME, payload: value });
    LocalStorageService.setIsDefaultTheme(value);
  };
  return { isDefaultTheme: state.isDefaultTheme, toggleTheme, setTheme };
};
