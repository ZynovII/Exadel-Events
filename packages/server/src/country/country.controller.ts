import { Request, Response } from 'express';
import countryService, { CountryService } from './country.service';

export class CountryController {
  constructor(private readonly _service: CountryService) {}

  createCountry = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createCountry(data);
    return res.send(data);
  };

  getAllCountries = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllCountries();
    return res.send(result);
  };

  getCountryByName = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getCountryByName(req.params.name);
    return res.send(result);
  };

  deleteCountry = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteCountry(req.params.name);
    return res.send(result);
  };
}

export default new CountryController(countryService);
