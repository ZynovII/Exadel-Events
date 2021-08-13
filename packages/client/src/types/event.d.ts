export enum EventType {
  MeetUp = 'MeetUp',
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  eventType: string;
  languages?: string[];
  categories?: string[];
  registrationFields: string[];
  additionalData?: any;
}
export interface ICreateEvent {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  eventType: string;
  languages?: string[];
  categories?: string[];
  additionalData?: any;
}
