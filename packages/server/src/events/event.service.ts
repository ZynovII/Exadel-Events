import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { EventDocument } from './event.model';

export class EventService {
  constructor(private readonly _model: Model<EventDocument>) {}

  async createEvent(data: CreateEventDto): Promise<EventDocument> {
    const newEvent = new this._model(data);
    return await newEvent.save();
  }

  async getAllEvents(): Promise<EventDocument[]> {
    return await this._model.find();
  }

  async deleteEvent(id: string): Promise<string> {
    await this._model.findByIdAndRemove(id);
    return 'Success';
  }

  async updateEvent(id: string, payload: CreateEventDto): Promise<EventDocument> {
    return await this._model.findByIdAndUpdate(id, payload);
  }
}
