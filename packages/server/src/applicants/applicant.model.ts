import { model, Schema } from 'mongoose';
import { Applicant } from '../../../common types/dto/applicant/applicant.type';

const schemaApplicant = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  skype: String,
  country: String,
  city: String,
  cvPath: String,
  techStack: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  additionalData: Schema.Types.Mixed,
});

export const ApplicantModel = model<Applicant>('Applicant', schemaApplicant);
