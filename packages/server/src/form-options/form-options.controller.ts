import { Request, Response, NextFunction } from 'express';
import { log } from '../logger/logger';
import formOptionsService, { FormOptionsService } from './form-options.service';

export class FormOptionsController {
  constructor(private readonly _service: FormOptionsService) {}

  getFilterOptions = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.getFilterOptions();
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };
}

export default new FormOptionsController(formOptionsService);
