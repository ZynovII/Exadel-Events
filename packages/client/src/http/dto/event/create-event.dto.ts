import { EventStatus } from './event-status.enum';

export interface CreateEventDto {
  title: string;
  description: string;
  startDate: string;
  categories: string[];
  languages: string[];
  location: string[];
  isOnline: boolean;
  type: string;
  status: EventStatus;
  registrationFields: string[];
}
