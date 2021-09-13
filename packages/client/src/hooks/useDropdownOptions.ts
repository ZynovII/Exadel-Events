import { useCallback, useEffect } from 'react';
import { useStore } from './useStore.hook';

import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';

export const useDropdownOptions = () => {
  const { state, dispatch } = useStore();

  const fetchOptions = useCallback(() => {
    EventService.getOptions().then((options) =>
      dispatch({ type: ActionTypes.FETCH_OPTIONS, payload: options })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return { options: state.options, fetchOptions };
};
