import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
import { DELETED } from '../utils/constants';
import { CreateFormFieldDto } from './dto/create-form-field.dto';

export class FormFieldService {
  constructor(private readonly _model: Model<CreateFormFieldDto>) {}

  async createFormField(data: CreateFormFieldDto): Promise<CreateFormFieldDto> {
    const newFormField = new this._model(data);
    return newFormField.save();
  }

  async getAllFormFields(): Promise<CreateFormFieldDto[]> {
    return this._model.find();
  }

  async getFormFieldById(id: string): Promise<CreateFormFieldDto> {
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

  async updateFormField(id: string, payload: CreateFormFieldDto): Promise<CreateFormFieldDto> {
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
