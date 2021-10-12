import { ActionTypes } from '../storage/context/action.types';
import { useStore } from './useStore.hook';

export const useMyTheme = () => {
  const { state, dispatch } = useStore();
  const toggleTheme = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
  };
  const setTheme = (value: boolean) => {
    dispatch({ type: ActionTypes.SET_THEME, payload: value });
  };
  return { isDefaultTheme: state.isDefaultTheme, toggleTheme, setTheme };
};
