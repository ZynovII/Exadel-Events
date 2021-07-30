import { CreateEventDto } from './dto/event.dto';
import { EventDocument, EventModel } from './event.model';

export class EventService {
  model = EventModel;

  async createEvent(data: CreateEventDto): Promise<EventDocument> {
    const newEvent = new this.model(data);
    return await newEvent.save();
  }

  async getAllEvents(): Promise<EventDocument[]> {
    return await this.model.find();
  }

  async deleteEvent(id: any): Promise<string> {
    await this.model.findByIdAndRemove(id);
    return 'Success';
  }
}
