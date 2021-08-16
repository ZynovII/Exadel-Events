import { Request, Response } from 'express';
import { LanguageService } from './language.service';

export class LanguageController {
  constructor(private readonly _service: LanguageService) {}

  createLanguage = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createLanguage(data);
    return res.send(data);
  };

  getAllLanguages = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllLanguages();
    return res.send(result);
  };

  getLanguageByName = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getLanguageByName(req.params.name);
    return res.send(result);
  };

  deleteLanguage = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteLanguage(req.params.name);
    return res.send(result);
  };
}
