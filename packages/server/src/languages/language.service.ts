import { Model } from 'mongoose';
import { CreateLanguageDto } from './language.dto';

export class LanguageService {
  constructor(private readonly _model: Model<CreateLanguageDto>) {}

  async createLanguage(data: CreateLanguageDto): Promise<CreateLanguageDto> {
    const newLanguage = new this._model(data);
    return newLanguage.save();
  }

  async getAllLanguages(): Promise<CreateLanguageDto[]> {
    return this._model.find();
  }

  async getLanguageByName(name: string): Promise<CreateLanguageDto> {
    return this._model.findOne({ name });
  }

  async deleteLanguage(name: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ name }, (err) => {
      response = err.message;
    });
    return response;
  }
}
