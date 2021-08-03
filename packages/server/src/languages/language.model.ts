import { model, Schema } from 'mongoose';
import { CreateLanguageDto } from './language.dto';

const schemaLanguage = new Schema({
  name: { type: String, required: true },
});
export const LanguageModel = model<CreateLanguageDto>('Event-Type', schemaLanguage);
