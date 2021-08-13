import { IAction, IStore } from '../types/store';
import { ActionTypes } from './action.types';

export const reducer = (state: IStore, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_EVENTS:
      return { ...state, events: [...state.events, payload] };

    default:
      return state;
  }
};
