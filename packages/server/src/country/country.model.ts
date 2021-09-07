import { model, Schema } from 'mongoose';
import { Country } from '../../../common types/dto/country/country.type';

const schemaCountry = new Schema({
  name: { type: String, required: true },
});
export const CountryModel = model<Country>('Country', schemaCountry);
