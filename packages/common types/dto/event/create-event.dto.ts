import { Field } from '../field/field.type';
import { Event } from './event.type';
import { EventStatus } from './event-status.enum';

export interface CreateEventDto {
  title: string;
  description: string;
  startDate: string;
  additionalData: any;
  eventFields: Field[];
  registrationFields: Field[];
}
