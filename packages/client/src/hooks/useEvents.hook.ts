import { useCallback, useEffect, useState } from 'react';

import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { Event } from '../../../common types/dto/event/event.type';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';
import {
  valuesInArrayOfObjFromStringToDate,
  valuesInObjFromStringToDate,
} from '../utils/dateFormater';
import { useLoading } from './useLoading.hook';
import { useStore } from './useStore.hook';

export const useEvents = (params?: { isFetch?: boolean; id?: string }) => {
  const { state, dispatch } = useStore();
  const { setLoading } = useLoading();
  const [eventById, setEventById] = useState<Event | undefined>();

  const createEvent = async (createEventDto: CreateEventDto, image: any) => {
    return await EventService.createEvent(createEventDto, image);
  };

  const updateEvent = async (
    id: string,
    createEventDto: CreateEventDto,
    image: any
  ) => {
    return await EventService.updateEvent(id, createEventDto, image);
  };

  const fetchEvents = useCallback(
    async (params?: FilterEventDto) => {
      const promise = new Promise((resolve, reject) => {
        EventService.getAllEvents(params).then((data) => {
          const events = data?.data || [];
          resolve(
            dispatch({
              type: ActionTypes.FETCH_EVENTS,
              payload: valuesInArrayOfObjFromStringToDate(events),
            })
          );
        });
      });
      setLoading(promise);
    },
    [dispatch]
  );

  const getEventById = useCallback(
    async (id) => {
      const result =
        state.events.find((event) => event._id === id) ||
        (await EventService.getEventById(id));
      setEventById(valuesInObjFromStringToDate(result));
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
    updateEvent,
    eventById,
    events: state.events,
  };
};
