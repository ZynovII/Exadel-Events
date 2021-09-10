import { Schema, model } from 'mongoose';
import { EventStatus } from '../../../common types/dto/event/event-status.enum';
import { Event } from '../../../common types/dto/event/event.type';

const schemaEvent = new Schema<Event>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  status: { type: String, default: EventStatus.draft },
  isOnline: Boolean,
  additionalData: Schema.Types.Mixed,
  countries: {
    type: Schema.Types.ObjectId,
    ref: 'Countries',
  },
  eventTypes: {
    type: Schema.Types.ObjectId,
    ref: 'Event-Type',
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event-Category',
    },
  ],
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Langeage',
    },
  ],
  registrationFields: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Form-field',
    },
  ],
});
schemaEvent.index({ '$**': 'text' });
export const EventModel = model<Event>('Event', schemaEvent);
