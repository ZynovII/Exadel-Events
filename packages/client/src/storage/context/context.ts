import { createContext } from 'react';
import { LocalStorageService } from '../localStorage/localStorage.service';
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
  isAuth: LocalStorageService.isTokenAlive(),
  isLoading: true,
  isDefaultTheme: LocalStorageService.getIsDefaultTheme(),
  user: null,
};

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});
