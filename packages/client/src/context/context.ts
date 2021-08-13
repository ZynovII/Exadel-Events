import { createContext } from 'react';
import { IContext, IStore } from '../types/store';

export const initialState: IStore = {
  events: [],
  applicants: [],
  isAuth: false,
};

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});
