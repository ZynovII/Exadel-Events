import { Request, Response, NextFunction } from 'express';
import { ApplicantService } from './applicant.service';
import { log } from '../logger/logger';

export class ApplicantController {
  constructor(private readonly _service: ApplicantService) {}

  createApplicant = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createApplicant(data);
      return res.send(data);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getAllApplicants = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllApplicants();
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  getApplicantById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getApplicantById(req.params.id);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  deleteApplicant = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteApplicant(req.params.id);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };

  updateApplicant = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.updateApplicant(req.params.id, req.body.applicant);
      return res.send(result);
    } catch (err) {
      log.info(err);
      next(err);
    }
  };
}
