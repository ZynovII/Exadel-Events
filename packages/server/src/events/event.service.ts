import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ResponseEvent } from '../../../common types/dto/event/response-event.type';
import { EventDocument, EventModel } from './event.model';

export class EventService {
  constructor(private readonly _model: Model<EventDocument>) {}

  async createEvent(data: CreateEventDto): Promise<EventDocument> {
    const newEvent = new this._model(data);
    return await newEvent.save();
  }

  async getAllEvents(params: FilterEventDto): Promise<ResponseEvent> {
    const { page = 1, size = 9, search = '', country, isOnline, type } = params;
    const result = await this._model
      .find({
        $text: { $search: search },
        additionalData: { country, isOnline, type },
      })
      .limit(size * 1)
      .skip((page - 1) * size)
      .exec();
    const totalCount = await this._model.count();
    return {
      data: result,
      totalCount,
    };
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
