import { model, Schema } from 'mongoose';
import { Language } from '../../../common types/dto/language/language.type';

const schemaLanguage = new Schema({
  name: { type: String, required: true },
});
export const LanguageModel = model<Language>('Language', schemaLanguage);
