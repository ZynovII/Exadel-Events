import { Model } from 'mongoose';
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
    return this._model.findOne({ id });
  }

  async deleteFormField(id: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ id }, (err) => {
      response = err.message;
    });
    return response;
  }

  async updateFormField(id: string, payload: CreateFormFieldDto): Promise<CreateFormFieldDto> {
    return this._model.findByIdAndUpdate(id, payload);
  }
}
