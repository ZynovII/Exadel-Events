import { model, Schema } from 'mongoose';
import { EventType } from '../../../common types/dto/event-type/event-type.type';

const schemaEventType = new Schema({
  name: { type: String, required: true },
});
export const EventTypeModel = model<EventType>('Event-Type', schemaEventType);
