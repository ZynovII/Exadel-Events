import { CreateEventDto } from '../http/dto/event/create-event.dto';
import { useStore } from './useStore.hook';

export const useEvents = () => {
  const { state, dispatch } = useStore();

  const createEvent = (createEventDto: CreateEventDto) => {
    return createEventDto;
  };

  return {
    createEvent,
  };
};
