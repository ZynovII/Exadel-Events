import { useCallback, useEffect } from 'react';
import { useStore } from './useStore.hook';

import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';

export const useDropdownOptions = () => {
  const { state, dispatch } = useStore();

  const fetchOptions = useCallback(() => {
    dispatch({ type: ActionTypes.LOADING, payload: null });
    EventService.getOptions().then((options) => {
      dispatch({ type: ActionTypes.FETCH_OPTIONS, payload: options });
      dispatch({ type: ActionTypes.LOADED, payload: null });
    });
  }, [dispatch]);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return { options: state.options, fetchOptions, isLoading: state.isLoading };
};
