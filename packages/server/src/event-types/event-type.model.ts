import { model, Schema } from 'mongoose';
import { CreateEventTypeDto } from './event-type.dto';

const schemaEventType = new Schema({
  name: { type: String, required: true },
});
export const EventTypeModel = model<CreateEventTypeDto>('Event-Type', schemaEventType);
