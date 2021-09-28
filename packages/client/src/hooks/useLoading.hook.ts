import { useCallback, useEffect, useRef } from 'react';
import { ActionTypes } from '../context/action.types';
import { useStore } from './useStore.hook';

export const useLoading = () => {
  const { state, dispatch } = useStore();
  let promiseArr = useRef<Promise<any>[]>([]);

  const setLoading = useCallback(
    (promise: Promise<any>) => {
      dispatch({ type: ActionTypes.LOADING, payload: true });
      promiseArr.current = [...promiseArr.current, promise];
    },
    [dispatch]
  );

  useEffect(() => {
    Promise.all(promiseArr.current).then((cbArr) => {
      cbArr.forEach((cb) => cb());
      dispatch({ type: ActionTypes.LOADING, payload: false });
      promiseArr.current = [];
    });
  }, []);

  return { isLoading: state.isLoading, setLoading };
};
