import { Schema, model } from 'mongoose';
import { EventStatus } from '../../../common types/dto/event/event-status.enum';
import { Event } from '../../../common types/dto/event/event.type';

const schemaEvent = new Schema<Event>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  status: { type: String, default: EventStatus.draft },
  imagePath: String,
  isOnline: Boolean,
  additionalData: Schema.Types.Mixed,
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Event-Type',
  },
  countries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Country',
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event-Category',
    },
  ],
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Language',
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
