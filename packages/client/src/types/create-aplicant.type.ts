import { Applicant } from '../../../common types/dto/applicant/applicant.type';

export interface CreateApplicant extends Partial<Applicant> {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  skype: string;
}
