import { createContext } from 'react';
import { IContext, IStore } from './store.type';

export const initialState: IStore = {
  events: [],
  applicants: [],
  options: {
    languages: [],
    types: [],
    countries: [],
    categories: [],
  },
  isAuth: false,
  isLoading: false,
};

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});
