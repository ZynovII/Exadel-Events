import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventTypeDto } from './event-type.dto';

export class EventTypeService {
  constructor(private readonly _model: Model<CreateEventTypeDto>) {}

  async createEventType(data: CreateEventTypeDto): Promise<CreateEventTypeDto> {
    const newEventType = new this._model(data);
    return newEventType.save();
  }

  async getAllEventTypes(): Promise<CreateEventTypeDto[]> {
    return this._model.find();
  }

  async getEventTypeByName(name: string): Promise<CreateEventTypeDto> {
    try {
      const result = await this._model.findOne({ name });
      if (result) {
        return result;
      } else {
        throw new NotFoundError('Event type');
      }
    } catch (err) {
      throw new CustomError();
    }
  }

  async deleteEventType(name: string): Promise<string> {
    try {
      const result = this.getEventTypeByName(name);
      await this._model.remove(result);
      return 'Successfully deleted';
    } catch (err) {
      throw new CustomError();
    }
  }
}
