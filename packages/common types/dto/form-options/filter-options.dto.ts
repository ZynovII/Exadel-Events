import { Country } from '../country/country.type';
import { EventType } from '../event-type/event-type.type';

export interface FilterOptionsDto {
  types: EventType[];
  countries: Country[];
}
