import { model, Schema, Types } from 'mongoose';
import { CreateApplicantDto } from './dto/create-applicant.dto';

const schemaApplicant = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  additionalData: { type: JSON },
  events: [
    {
      type: Types.ObjectId,
      ref: 'Event',
    },
  ],
});

export const ApplicantModel = model<CreateApplicantDto>('Applicant', schemaApplicant);
