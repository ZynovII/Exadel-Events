import { Schema, model } from 'mongoose';

export interface EventDocument {
  title: string;
  description: string;
  date: string;
}

const schemaEvent = new Schema({
  title: String,
  date: String,
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
export const EventModel = model<EventDocument>('Event', schemaEvent);
