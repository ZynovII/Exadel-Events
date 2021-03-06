import React, { useReducer } from 'react';

import { Context, initialState } from './context';
import { reducer } from './reducer';

export const Store: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
