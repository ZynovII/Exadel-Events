import { Router } from 'express';
import passport from 'passport';

import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';
import { ApplicantModel } from './applicant.model';

export const applicantRouter = Router();

const applicantController = new ApplicantController(new ApplicantService(ApplicantModel));

applicantRouter.get(
  '/applicant',
  passport.authenticate('jwt', { session: false }),
  applicantController.getAllApplicants,
);
applicantRouter.get(
  '/applicant/:id',
  passport.authenticate('jwt', { session: false }),
  applicantController.getApplicantById,
);
applicantRouter.post('/applicant', applicantController.createApplicant);
applicantRouter.delete(
  '/applicant/:id',
  passport.authenticate('jwt', { session: false }),
  applicantController.deleteApplicant,
);
applicantRouter.put(
  '/applicant',
  passport.authenticate('jwt', { session: false }),
  applicantController.updateApplicant,
);
