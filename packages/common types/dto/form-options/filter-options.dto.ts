import { Country } from '../country/country.type';
import { EventCategory } from '../event-category/event-category.type';
import { EventType } from '../event-type/event-type.type';
import { Language } from '../language/language.type';

export interface FilterOptionsDto {
  types: EventType[];
  countries: Country[];
  languages: Language[];
  categories: EventCategory[];
}
