import { model, Schema } from 'mongoose';
import { CreateApplicantDto } from './dto/create-applicant.dto';

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

export const ApplicantModel = model<CreateApplicantDto>('Applicant', schemaApplicant);
