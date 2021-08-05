import { Request, Response } from 'express';
import { ApplicantService } from './applicant.service';

export class ApplicantController {
  constructor(private readonly _service: ApplicantService) {}

  async createApplicant(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createApplicant(data);
    return res.send(data);
  }

  async getAllApplicants(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllApplicants();
    return res.send(result);
  }

  async getApplicantById(req: Request, res: Response): Promise<Response> {
    const result = this._service.getApplicantById(req.params.id);
    return res.send(result);
  }

  async deleteApplicant(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteApplicant(req.params.id);
    return res.send(result);
  }

  async updateApplicant(req: Request, res: Response): Promise<Response> {
    const result = this._service.updateApplicant(req.params.id, req.body.applicant);
    return res.send(result);
  }
}
