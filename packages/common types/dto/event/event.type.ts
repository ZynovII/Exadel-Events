import { Country } from '../country/country.type';
import { EventCategory } from '../event-category/event-category.type';
import { EventType } from '../event-type/event-type.type';
import { Field } from '../field/field.type';
import { Language } from '../language/language.type';
import { EventStatus } from './event-status.enum';

export type Event = {
  _id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: EventStatus;
  isOnline: boolean;
  imagePath: string;
  countries: Country[];
  type: EventType;
  categories: EventCategory[];
  languages: Language[];
  additionalData?: any;
  eventFields?: Field[];
  registrationFields?: Field[];
};
