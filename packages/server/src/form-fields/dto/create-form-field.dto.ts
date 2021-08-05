import { FormFieldType } from '../form-field-type.enum';

export interface CreateFormFieldDto {
  name: string;
  type: FormFieldType;
}
