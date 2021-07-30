import mongoose from 'mongoose';

export interface EventDocument {
  title: string;
  description: string;
  date: string;
}

const schemaEvent = new mongoose.Schema({
  title: String,
  date: String,
});
export const EventModel = mongoose.model<EventDocument>('Event', schemaEvent);
