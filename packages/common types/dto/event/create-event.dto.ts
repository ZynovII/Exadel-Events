import { Field } from '../field/field.type';
import { Event } from './event.type';
import { EventStatus } from './event-status.enum';

export interface CreateEventDto {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: 'Draft' | 'Archived' | 'Published';
  isOnline: boolean;
  country: string[];
  type: string;
  categories: string[];
  languages: string[];
  imagePath?: string;
  additionalData: any;
  eventFields: Field[];
  registrationFields: Field[];
}
