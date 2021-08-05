import { model, Schema, Types } from 'mongoose';
import { CreateFormFieldDto } from './dto/create-form-field.dto';

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

export const FormFieldModel = model<CreateFormFieldDto>('Applicant', schemaApplicant);
