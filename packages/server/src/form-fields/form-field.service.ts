import { Model } from 'mongoose';

import { FormFieldModel } from './form-field.model';
import { NotFoundError } from '../error-handler/NotFoundError';
import { DELETED } from '../utils/constants';
import { CreateFormFieldDto } from '../../../common types/dto/field/create-form-field.dto';
import { Field } from '../../../common types/dto/field/field.type';

export class FormFieldService {
  constructor(private readonly _model: Model<Field>) {}

  async createFormField(data: CreateFormFieldDto): Promise<Field> {
    const newFormField = new this._model(data);
    return newFormField.save();
  }

  async getAllFormFields(): Promise<Field[]> {
    return this._model.find();
  }

  async getFormFieldById(id: string): Promise<Field> {
    const result = await this._model.findOne({ id });
    if (result === null) {
      throw new NotFoundError('Form field');
    }
    return result;
  }

  async deleteFormField(id: string): Promise<string> {
    await this._model.remove(await this.getFormFieldById(id));
    return DELETED;
  }

  async updateFormField(id: string, payload: CreateFormFieldDto): Promise<Field> {
    const result = await this._model.findByIdAndUpdate(id, payload);
    if (result === null) {
      throw new NotFoundError('Form field');
    }
    return result;
  }
}

export default new FormFieldService(FormFieldModel);
