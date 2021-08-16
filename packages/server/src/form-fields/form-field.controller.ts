import { Request, Response } from 'express';
import { FormFieldService } from './form-field.service';

export class FormFieldController {
  constructor(private readonly _service: FormFieldService) {}

  createFormField = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createFormField(data);
    return res.send(data);
  };

  getAllFormFields = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllFormFields();
    return res.send(result);
  };

  getFormFieldById = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getFormFieldById(req.params.id);
    return res.send(result);
  };

  deleteFormField = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteFormField(req.params.id);
    return res.send(result);
  };

  updateFormField = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.updateFormField(req.params.id, req.body.field);
    return res.send(result);
  };
}
