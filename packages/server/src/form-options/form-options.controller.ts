import { Request, Response } from 'express';
import formOptionsService, { FormOptionsService } from './form-options.service';

export class FormOptionsController {
  constructor(private readonly _service: FormOptionsService) {}

  getFilterOptions = async (req: Request, res: Response): Promise<Response> => {
    const result = await this._service.getFilterOptions();
    return res.send(result);
  };
}

export default new FormOptionsController(formOptionsService);
