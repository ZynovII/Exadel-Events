import axios from 'axios';
import { API_URL } from '../../utils/constants';

export class EventService {
  static async getAllEvents() {
    try {
      const responce = await axios.get(`${API_URL}/events`);
      return responce;
    } catch (err) {}
  }

  static async getEventById(id: string) {
    const responce = await axios.get(`${API_URL}/events/${id}`);
  }
}
