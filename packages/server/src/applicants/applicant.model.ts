import { model, Schema } from 'mongoose';
import { Applicant } from '../../../common types/dto/applicant/applicant.type';

const schemaApplicant = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  additionalData: Schema.Types.Mixed,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

export const ApplicantModel = model<Applicant>('Applicant', schemaApplicant);
