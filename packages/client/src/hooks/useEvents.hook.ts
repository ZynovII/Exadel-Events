import { useCallback, useEffect, useState } from 'react';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { Event } from '../../../common types/dto/event/event.type';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';
import { valuesInObjFromStringToDate } from '../utils/dateFormater';
import { useStore } from './useStore.hook';

export const useEvents = (params?: { isFetch?: boolean; id?: string }) => {
  const { state, dispatch } = useStore();
  const [eventById, setEventById] = useState<Event | undefined>();
  const [isLoading, setLoading] = useState(true);

  const createEvent = async (createEventDto: CreateEventDto, image: any) => {
    return await EventService.createEvent(createEventDto, image);
  };

  const fetchEvents = useCallback(
    async (params?: FilterEventDto) => {
      const { data } = (await EventService.getAllEvents(params)) || {
        data: [],
      };
      dispatch({
        type: ActionTypes.FETCH_EVENTS,
        payload: valuesInObjFromStringToDate(data),
      });
      setLoading(false);
    },
    [dispatch]
  );

  const getEventById = useCallback(
    async (id) => {
      const result =
        state.events.find((event) => event._id === id) ||
        (await EventService.getEventById(id));
      setEventById(valuesInObjFromStringToDate(result));
      setLoading(false);
    },
    [state.events]
  );

  useEffect(() => {
    params?.isFetch && fetchEvents();
  }, [fetchEvents, params?.isFetch]);

  useEffect(() => {
    params?.id && getEventById(params.id);
  }, [getEventById, params?.id]);

  return {
    createEvent,
    fetchEvents,
    eventById,
    events: state.events,
    isLoading,
  };
};
