import { useCallback, useEffect } from 'react';
import { useStore } from './useStore.hook';

import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';
import { useLoading } from './useLoading.hook';

export const useDropdownOptions = () => {
  const { state, dispatch } = useStore();
  const { setLoading } = useLoading();

  const fetchOptions = useCallback(() => {
    const promise = new Promise((resolve, reject) => {
      EventService.getOptions().then((options) => {
        resolve(
          dispatch({ type: ActionTypes.FETCH_OPTIONS, payload: options })
        );
      });
    });
    setLoading(promise);
  }, [dispatch]);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return { options: state.options, fetchOptions };
};
