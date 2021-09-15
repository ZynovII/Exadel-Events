import { Field } from '../field/field.type';
import { EventStatus } from './event-status.enum';

export type Event = {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  status: EventStatus;
  isOnline: boolean;
  imagePath: string;
  country: string[];
  type: string;
  categories: string[];
  languages: string[];
  additionalData?: any;
  eventFields?: Field[];
  registrationFields?: Field[];
};
