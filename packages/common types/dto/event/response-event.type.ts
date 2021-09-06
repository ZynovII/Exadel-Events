import { Event } from './event.type';

export interface ResponseEvent {
  data: Event[];
  totalCount: number;
}
