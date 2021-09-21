import { Applicant } from './applicant.type';

export interface CreateApplicantDto extends Partial<Applicant> {
  firstName: string;
  lastName: string;
  email: string;
  cvPath: string;
  country: string;
  city: string;
  skype: string;
  event: string;
  additionalData: any;
}
