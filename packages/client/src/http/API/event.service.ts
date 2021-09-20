import axios from 'axios';
import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { Event } from '../../../../common types/dto/event/event.type';
import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { ResponseEvents } from '../../../../common types/dto/event/response-event.type';
import { errorHandler } from '../../error-handler/error-handler';
import { API_URL } from '../../utils/constants';
import { generateQueryString } from '../../utils/generate-query-string';

export class EventService {
  static async getAllEvents(
    params?: FilterEventDto
  ): Promise<ResponseEvents | undefined> {
    const query = params ? '?' + generateQueryString(params) : '';
    try {
      return await (
        await axios.get(`${API_URL}/events${query}`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async getEventById(id: string): Promise<Event | undefined> {
    try {
      return await (
        await axios.get(`${API_URL}/events/${id}`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async createEvent(event: CreateEventDto, image?: any) {
    try {
      let imagePath = null;
      if (image) {
        const data = new FormData();
        data.append('file', image, image.name);
        imagePath = await (
          await axios.post(`${API_URL}/upload-image`, data)
        ).data;
      }
      return await (
        await axios.post(`${API_URL}/events`, { ...event, imagePath })
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async updateEvent(id: string, event: CreateEventDto) {
    try {
      return await (
        await axios.put(`${API_URL}/events/${id}`, event)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async deleteEvent(id: string) {
    try {
      return await axios.delete(`${API_URL}/events/${id}`);
    } catch (err) {
      errorHandler(err);
    }
  }

  static async getOptions() {
    try {
      return await (
        await axios.get(`${API_URL}/filter-options`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
