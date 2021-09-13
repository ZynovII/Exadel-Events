import { Router } from 'express';
import countryController from './country.controller';

export const countryRouter = Router();

countryRouter.get('/country', countryController.getAllCountries);

countryRouter.get('/country/:name', countryController.getCountryByName);

countryRouter.post('/country', countryController.createCountry);

countryRouter.delete('/country', countryController.deleteCountry);
