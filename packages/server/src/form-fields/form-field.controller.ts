import { Request, Response } from 'express';
import { FormFieldService } from './form-field.service';

export class FormFieldController {
  constructor(private readonly _service: FormFieldService) {}

  async createFormField(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createFormField(data);
    return res.send(data);
  }

  async getAllFormFields(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllFormFields();
    return res.send(result);
  }

  async getFormFieldById(req: Request, res: Response): Promise<Response> {
    const result = this._service.getFormFieldById(req.params.id);
    return res.send(result);
  }

  async deleteFormField(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteFormField(req.params.id);
    return res.send(result);
  }

  async updateFormField(req: Request, res: Response): Promise<Response> {
    const result = this._service.updateFormField(req.params.id, req.body.field);
    return res.send(result);
  }
}
