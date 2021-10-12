import { IAction, IStore } from './store.type';
import { ActionTypes } from './action.types';

export const reducer = (state: IStore, action: IAction): IStore => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload, isAuth: true };

    case ActionTypes.REMOVE_USER:
      return { ...state, user: null, isAuth: false };

    case ActionTypes.FETCH_EVENTS:
      return { ...state, events: payload };

    case ActionTypes.FETCH_OPTIONS:
      return { ...state, options: payload };

    case ActionTypes.LOADING:
      return { ...state, isLoading: payload };

    case ActionTypes.TOGGLE_THEME:
      return { ...state, isDefaultTheme: !state.isDefaultTheme };

    case ActionTypes.SET_THEME:
      return { ...state, isDefaultTheme: payload };

    default:
      return state;
  }
};
