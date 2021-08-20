import { Schema } from 'mongoose';

export type EventType = {
  _id: Schema.Types.ObjectId;
  name: string;
};
