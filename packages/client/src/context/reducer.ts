import { IAction, IStore } from './store.type';
import { ActionTypes } from './action.types';

export const reducer = (state: IStore, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_EVENTS:
      return { ...state, events: payload };

    case ActionTypes.FETCH_OPTIONS:
      return { ...state, options: payload };
    default:
      return state;
  }
};
