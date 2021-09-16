import { Request, Response, NextFunction } from 'express';
import formFieldService, { FormFieldService } from './form-field.service';
import { log } from '../logger/logger';

export class FormFieldController {
  constructor(private readonly _service: FormFieldService) {}

  createFormField = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createFormField(data);
      return res.send(data);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getAllFormFields = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllFormFields();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getFormFieldById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getFormFieldById(req.params.id);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteFormField = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteFormField(req.params.id);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  updateFormField = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.updateFormField(req.params.id, req.body.field);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new FormFieldController(formFieldService);
