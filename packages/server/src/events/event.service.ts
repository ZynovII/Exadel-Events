import { Model } from 'mongoose';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventDto } from '../../../common types/dto/event/create-event.dto';
import { FilterEventDto } from '../../../common types/dto/event/filter-event.dto';
import { ResponseEvents } from '../../../common types/dto/event/response-event.type';
import { EventModel } from './event.model';
import { Event } from '../../../common types/dto/event/event.type';
import { valuesInObjFromStringToDate } from '../utils/stringToDate';
import { DELETED } from '../utils/constants';
import { BadRequestError } from '../error-handler/BadRequestError';
export class EventService {
  constructor(private readonly _model: Model<Event>) {}

  async createEvent(data: CreateEventDto): Promise<Event> {
    try {
      const newEvent = new this._model(valuesInObjFromStringToDate(data));
      return await newEvent.save();
    } catch (err) {
      throw new BadRequestError(err.message);
    }
  }

  async getAllEvents(params: FilterEventDto): Promise<ResponseEvents> {
    const { page = 1, size = 9, search = '', country, isOnline, type } = params;
    let result: Event[];
    if (Object.keys(params).length) {
      result = await this._model
        .find({
          $text: { $search: search },
          'countries.name': country,
          isOnline,
          'type.name': type,
        })
        .limit(size * 1)
        .skip((page - 1) * size)
        .populate('type')
        .populate('countries', 'name')
        .populate('languages', 'name')
        .populate('categories', 'name')
        .populate('registrationFields', 'name')
        .exec();
    } else {
      result = await this._model
        .find()
        .populate('type')
        .populate('countries', 'name')
        .populate('languages', 'name')
        .populate('categories', 'name')
        .populate('registrationFields', 'name')
        .exec();
    }
    const totalCount = await this._model.countDocuments();
    return {
      data: result,
      totalCount,
    };
  }

  async getEventById(id: string): Promise<Event> {
    const result = await this._model
      .findById(id)
      .populate('type')
      .populate('countries', 'name')
      .populate('languages', 'name')
      .populate('categories', 'name')
      .populate('registrationFields', 'name')
      .exec();
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
