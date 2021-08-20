import { Model } from 'mongoose';
import { log } from '../logger/logger';
import { CreateLanguageDto } from '../../../common types/dto/language/language.dto';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CustomError } from '../error-handler/CustomError';
import { DELETED } from '../utils/constants';
import { Language } from '../../../common types/dto/language/language.type';

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
    try {
      const result = await this._model.findOne({ name });
      if (result === null) {
        throw new NotFoundError('Language');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async deleteLanguage(name: string): Promise<string> {
    try {
      await this._model.remove(await this.getLanguageByName(name));
      return DELETED;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }
}
