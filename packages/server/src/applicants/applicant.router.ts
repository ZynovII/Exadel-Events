import { Router } from 'express';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';
import { ApplicantModel } from './applicant.model';

export const applicantRouter = Router();

const applicantController = new ApplicantController(new ApplicantService(ApplicantModel));

applicantRouter.get('/applicant', applicantController.getAllApplicants);
applicantRouter.get('/applicant/:id', applicantController.getApplicantById);
applicantRouter.post('/applicant', applicantController.createApplicant);
applicantRouter.delete('/applicant/:id', applicantController.deleteApplicant);
applicantRouter.put('/applicant', applicantController.updateApplicant);
