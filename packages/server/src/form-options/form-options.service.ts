import { FilterOptionsDto } from '../../../common types/dto/form-options/filter-options.dto';
import countryService from '../country/country.service';
import { CustomError } from '../error-handler/CustomError';
import eventTypeService from '../event-types/event-type.service';

export class FormOptionsService {
  async getFilterOptions(): Promise<FilterOptionsDto> {
    try {
      const countries = await countryService.getAllCountries();
      const types = await eventTypeService.getAllEventTypes();
      return {
        types,
        countries,
      };
    } catch (err) {
      throw new CustomError(err.message);
    }
  }
}

export default new FormOptionsService();
