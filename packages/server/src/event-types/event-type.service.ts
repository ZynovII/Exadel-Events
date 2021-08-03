import { Model } from 'mongoose';
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
    return this._model.findOne({ name });
  }

  async deleteEventType(name: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ name }, (err) => {
      response = err.message;
    });
    return response;
  }
}
