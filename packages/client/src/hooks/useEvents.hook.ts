import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ActionTypes } from '../context/action.types';
import { EventService } from '../http/API/event.service';
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

  return {
    createEvent,
    fetchEvents,
    events: state.events,
    applicants: state.applicants,
  };
};
