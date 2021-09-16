import { Model } from 'mongoose';

import { DELETED } from '../utils/constants';
import { LanguageModel } from './language.model';
import { NotFoundError } from '../error-handler/NotFoundError';
import { Language } from '../../../common types/dto/language/language.type';
import { CreateLanguageDto } from '../../../common types/dto/language/language.dto';

export class LanguageService {
  constructor(private readonly _model: Model<Language>) {}

  async createLanguage(data: CreateLanguageDto): Promise<Language> {
    const newLanguage = new this._model(data);
    return newLanguage.save();
  }

  async getAllLanguages(): Promise<Language[]> {
    return this._model.find();
  }

  async getLanguageByName(name: string): Promise<Language> {
    const result = await this._model.findOne({ name });
    if (result === null) {
      throw new NotFoundError('Language');
    }
    return result;
  }

  async deleteLanguage(name: string): Promise<string> {
    await this._model.findByIdAndDelete((await this.getLanguageByName(name))._id);
    return DELETED;
  }
}

export default new LanguageService(LanguageModel);
