import axios from 'axios';
import { API_URL } from '../../utils/constants';

export class EventService {
  static async getAllEvents() {
    const responce = await axios.get(`${API_URL}/events`);
    return responce;
  }
}
