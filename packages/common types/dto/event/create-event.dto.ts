import { Field } from '../field/field';
import { Event } from './event';
import { EventStatus } from './event-status.enum';

export interface CreateEventDto {
  title: string;
  description: string;
  startDate: string;
  additionalData: any;
  eventFields: Field[];
  registrationFields: Field[];
}
