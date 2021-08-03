import mongoose, { Schema } from 'mongoose';

export interface EventDocument {
  title: string;
  description: string;
  date: string;
}

const schemaEvent = new mongoose.Schema({
  title: String,
  date: String,
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'Event-Category',
  },
  languages: {
    type: Schema.Types.ObjectId,
    ref: 'Langeage',
  },
  eventTypes: {
    type: Schema.Types.ObjectId,
    ref: 'Event-Type',
  },
});
export const EventModel = mongoose.model<EventDocument>('Event', schemaEvent);
