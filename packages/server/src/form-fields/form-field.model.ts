import { model, Schema } from 'mongoose';
import { CreateFormFieldDto } from './dto/create-form-field.dto';

const schemaFormField = new Schema({
  name: { type: String, required: true },
  fieldType: { type: String, required: true },
  additionalData: { type: Schema.Types.Mixed },
});

export const FormFieldModel = model<CreateFormFieldDto>('Form-field', schemaFormField);
