import { Model } from 'mongoose';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ResponseEvent } from '../../../common types/dto/event/response-event.type';
import { EventModel } from './event.model';
import { Event } from '../../../common types/dto/event/event.type';
import { valuesInObjFromStringToDate } from '../utils/stringToDate';
import { DELETED } from '../utils/constants';
export class EventService {
  constructor(private readonly _model: Model<Event>) {}

  async createEvent(data: CreateEventDto): Promise<Event> {
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

  async getEventById(id: string): Promise<Event> {
    const result = await this._model.findById(id);
    if (result) {
      return result;
    } else {
      throw new NotFoundError('Event');
    }
  }

  async deleteEvent(id: string): Promise<string> {
    const result = await this._model.findByIdAndDelete(id);
    if (result) {
      return DELETED;
    } else {
      throw new NotFoundError('Event');
    }
  }

  async updateEvent(id: string, payload: Partial<CreateEventDto>): Promise<Event> {
    const update = valuesInObjFromStringToDate(payload);
    const result = await this._model.findByIdAndUpdate(id, update);
    if (result) {
      return result;
    } else {
      throw new NotFoundError('Event');
    }
  }
}

export default new EventService(EventModel);
