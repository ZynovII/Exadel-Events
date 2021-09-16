import { Model } from 'mongoose';

import { CountryModel } from './country.model';
import { CreateCountryDto } from '../../../common types/dto/country/create-country.dto';
import { NotFoundError } from '../error-handler/NotFoundError';
import { DELETED } from '../utils/constants';
import { Country } from '../../../common types/dto/country/country.type';

export class CountryService {
  constructor(private readonly _model: Model<Country>) {}

  async createCountry(data: CreateCountryDto): Promise<Country> {
    const newCountry = new this._model(data);
    return newCountry.save();
  }

  async getAllCountries(): Promise<Country[]> {
    return this._model.find();
  }

  async getCountryByName(name: string): Promise<Country> {
    const result = await this._model.findOne({ name });
    if (result === null) {
      throw new NotFoundError('Country');
    }
    return result;
  }

  async deleteCountry(name: string): Promise<string> {
    await this._model.remove(await this.getCountryByName(name));
    return DELETED;
  }
}

export default new CountryService(CountryModel);
