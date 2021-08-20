import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
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
    try {
      const result = await this._model.findOne({ id });
      if (result === null) {
        throw new NotFoundError('Form field');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async deleteFormField(id: string): Promise<string> {
    try {
      await this._model.remove(await this.getFormFieldById(id));
      return DELETED;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async updateFormField(id: string, payload: CreateFormFieldDto): Promise<Field> {
    try {
      const result = await this._model.findByIdAndUpdate(id, payload);
      if (result === null) {
        throw new NotFoundError('Form field');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }
}
