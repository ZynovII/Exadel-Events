import { Schema } from 'mongoose';
import { Field } from '../field/field';

export type Event = {
  _id: Schema.Types.ObjectId;
  title: string;
  description: string;
  startDate: Schema.Types.Date;
  additionalData?: any;
  eventFields?: Field[];
  registrationFields?: Field[];
};
