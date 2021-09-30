import { ActionTypes } from '../context/action.types';
import { useStore } from './useStore.hook';

export const useMyTheme = () => {
  const { state, dispatch } = useStore();
  const toggleTheme = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
  };
  return { isDefaultTheme: state.isDefaultTheme, toggleTheme };
};
