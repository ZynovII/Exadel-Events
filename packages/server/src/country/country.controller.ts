import { Request, Response, NextFunction } from 'express';
import countryService, { CountryService } from './country.service';
import { log } from '../logger/logger';

export class CountryController {
  constructor(private readonly _service: CountryService) {}

  createCountry = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createCountry(data);
      return res.send(data);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getAllCountries = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllCountries();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getCountryByName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getCountryByName(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteCountry = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteCountry(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new CountryController(countryService);
