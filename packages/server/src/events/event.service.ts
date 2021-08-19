import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { EventDocument, EventModel } from './event.model';

export class EventService {
  constructor(private readonly _model: Model<EventDocument>) {}

  async createEvent(data: CreateEventDto): Promise<EventDocument> {
    const newEvent = new this._model(data);
    return await newEvent.save();
  }

  async getAllEvents(): Promise<EventDocument[]> {
    return await this._model.find();
  }

  async getEventById(id: string): Promise<EventDocument> {
    try {
      const result = await this._model.findById(id);
      if (result) {
        return result;
      } else {
        throw new NotFoundError('Event');
      }
    } catch (err) {
      throw new CustomError();
    }
  }

  async deleteEvent(id: string): Promise<string> {
    try {
      const result = await this.getEventById(id);
      await this._model.findOneAndRemove(result);
      return 'Successfully deleted';
    } catch (err) {
      throw new CustomError();
    }
  }

  async updateEvent(id: string, payload: CreateEventDto): Promise<EventDocument> {
    try {
      const result = await this._model.findByIdAndUpdate(id, payload);
      if (result) {
        return result;
      } else {
        throw new NotFoundError('Event');
      }
    } catch (err) {
      throw new CustomError();
    }
  }
}

export default new EventService(EventModel);
