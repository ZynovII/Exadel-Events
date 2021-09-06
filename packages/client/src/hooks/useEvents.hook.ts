import axios from 'axios';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';
import { API_URL } from '../utils/constants';
import { useStore } from './useStore.hook';

export const useEvents = () => {
  const { state, dispatch } = useStore();

  const createEvent = async (createEventDto: CreateEventDto) => {
    return await EventService.createEvent(createEventDto);
  };

  const fetchEvents = async (params?: FilterEventDto) => {
    const events = await EventService.getAllEvents(params);
    dispatch({ type: ActionTypes.FETCH_EVENTS, payload: events });
  };

  const fetchOptions = async () => {
    return await axios.get(`${API_URL}/`);
  };

  return {
    createEvent,
    fetchEvents,
  };
};
