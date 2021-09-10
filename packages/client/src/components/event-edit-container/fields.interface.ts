import { CommonType } from '../../../../common types/dto/common-type.type';

export interface FieldForRender {
  type: string;
  name: string;
  label: string;
  value: any;
  multiline?: boolean;
  onChange: (value: any) => void;
  error?: any;
  helperText?: string | false | undefined;
  options?: CommonType[];
}
