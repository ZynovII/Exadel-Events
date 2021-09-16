import { Request, Response, NextFunction } from 'express';

import languageService, { LanguageService } from './language.service';
import { log } from '../logger/logger';

export class LanguageController {
  constructor(private readonly _service: LanguageService) {}

  createLanguage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createLanguage(data);
      return res.send(data);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getAllLanguages = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllLanguages();
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getLanguageByName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getLanguageByName(req.params.name);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  deleteLanguage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteLanguage(req.params.name);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };
}

export default new LanguageController(languageService);
