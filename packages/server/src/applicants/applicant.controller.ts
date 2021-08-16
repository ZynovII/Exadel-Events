import { Request, Response } from 'express';
import { ApplicantService } from './applicant.service';

export class ApplicantController {
  constructor(private readonly _service: ApplicantService) {}

  createApplicant = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createApplicant(data);
    return res.send(data);
  };

  getAllApplicants = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllApplicants();
    return res.send(result);
  };

  getApplicantById = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getApplicantById(req.params.id);
    return res.send(result);
  };

  deleteApplicant = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteApplicant(req.params.id);
    return res.send(result);
  };

  updateApplicant = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.updateApplicant(req.params.id, req.body.applicant);
    return res.send(result);
  };
}
