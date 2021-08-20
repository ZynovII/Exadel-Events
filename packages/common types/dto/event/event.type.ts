import { Field } from '../field/field.type';

export type Event = {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  additionalData?: any;
  eventFields?: Field[];
  registrationFields?: Field[];
};
