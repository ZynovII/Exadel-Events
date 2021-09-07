import { Field } from '../field/field.type';
import { EventStatus } from './event-status.enum';
import { EventType } from './event-type.enum';

export type Event = {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  country: string;
  type: EventType;
  status: EventStatus;
  categories: string[];
  languages: string[];
  isOnline: boolean;
  additionalData?: any;
  eventFields?: Field[];
  registrationFields?: Field[];
};
