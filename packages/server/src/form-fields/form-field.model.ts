import { model, Schema } from 'mongoose';
import { Field } from '../../../common types/dto/field/field.type';

const schemaFormField = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  additionalData: { type: Schema.Types.Mixed },
});

export const FormFieldModel = model<Field>('Form-field', schemaFormField);
