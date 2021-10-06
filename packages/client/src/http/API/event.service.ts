import axios from '../axios.config';
import { CreateEventDto } from '../../../../common types/dto/event/create-event.dto';
import { Event } from '../../../../common types/dto/event/event.type';
import { FilterEventDto } from '../../../../common types/dto/event/filter-event.dto';
import { ResponseEvents } from '../../../../common types/dto/event/response-event.type';
import { errorHandler } from '../../error-handler/error-handler';
import { generateQueryString } from '../../utils/generate-query-string';

export class EventService {
  static async getAllEvents(
    params?: FilterEventDto
  ): Promise<ResponseEvents | undefined> {
    const query = params ? '?' + generateQueryString(params) : '';
    try {
      return await (
        await axios.get(`/events${query}`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async getEventById(id: string): Promise<Event | undefined> {
    try {
      return await (
        await axios.get(`/events/${id}`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }
  static async uploadImage(image: any) {
    const data = new FormData();
    data.append('file', image, image.name);
    return await (
      await axios.post(`/upload-image`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    ).data;
  }

  static async createEvent(event: CreateEventDto, image?: any) {
    try {
      let imagePath = null;
      if (image) {
        imagePath = await this.uploadImage(image);
      }
      return await (
        await axios.post(`/events`, { ...event, imagePath })
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async updateEvent(id: string, event: CreateEventDto, image: any) {
    try {
      let imagePath = image;
      if (image instanceof Blob) {
        imagePath = await this.uploadImage(image);
      }
      return await (
        await axios.put(`/events/${id}`, { ...event, imagePath })
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }

  static async deleteEvent(id: string) {
    try {
      return await axios.delete(`/events/${id}`);
    } catch (err) {
      errorHandler(err);
    }
  }

  static async getOptions() {
    try {
      return await (
        await axios.get(`/filter-options`)
      ).data;
    } catch (err) {
      errorHandler(err);
    }
  }
}
