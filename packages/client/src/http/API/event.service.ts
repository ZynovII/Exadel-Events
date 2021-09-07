import axios from 'axios';
import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { HTTPError } from '../../error-handler/error-handler';
import { API_URL } from '../../utils/constants';
import { generateQueryString } from '../../utils/generate-query-string';

export class EventService {
  static async getAllEvents(params?: FilterEventDto) {
    const query = params ? '?' + generateQueryString(params) : '';
    try {
      return await axios.get(`${API_URL}/events${query}`);
    } catch (err) {
      throw new HTTPError(err.message, err.status);
    }
  }

  static async getEventById(id: string) {
    try {
      return await axios.get(`${API_URL}/events/${id}`);
    } catch (err) {
      throw new HTTPError(err.message, err.status);
    }
  }

  static async createEvent(event: CreateEventDto) {
    try {
      return await axios.post(`${API_URL}/events`, event);
    } catch (err) {
      throw new HTTPError(err.message, err.status);
    }
  }

  static async updateEvent(id: string, event: CreateEventDto) {
    try {
      return await axios.put(`${API_URL}/events/${id}`, event);
    } catch (err) {
      throw new HTTPError(err.message, err.status);
    }
  }

  static async deleteEvent(id: string) {
    try {
      return await axios.delete(`${API_URL}/events/${id}`);
    } catch (err) {
      throw new HTTPError(err.message, err.status);
    }
  }
}
