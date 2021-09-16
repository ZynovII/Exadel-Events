import { FilterOptionsDto } from '../../../common types/dto/form-options/filter-options.dto';
import countryService from '../country/country.service';
import languageService from '../languages/language.service';
import categoriesService from '../event-categories/event-category.service';
import eventTypeService from '../event-types/event-type.service';

export class FormOptionsService {
  async getFilterOptions(): Promise<FilterOptionsDto> {
    const countries = await countryService.getAllCountries();
    const types = await eventTypeService.getAllEventTypes();
    const categories = await categoriesService.getAllEventCategories();
    const languages = await languageService.getAllLanguages();
    return {
      types,
      countries,
      languages,
      categories,
    };
  }
}

export default new FormOptionsService();
