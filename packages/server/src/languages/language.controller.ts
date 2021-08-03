import { Request, Response } from 'express';
import { LanguageService } from './language.service';

export class LanguageController {
  constructor(private readonly _service: LanguageService) {}

  async createLanguage(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createLanguage(data);
    return res.send(data);
  }

  async getAllLanguages(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllLanguages();
    return res.send(result);
  }

  async getLanguageByName(req: Request, res: Response): Promise<Response> {
    const result = this._service.getLanguageByName(req.params.name);
    return res.send(result);
  }

  async deleteLanguage(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteLanguage(req.params.name);
    return res.send(result);
  }
}
