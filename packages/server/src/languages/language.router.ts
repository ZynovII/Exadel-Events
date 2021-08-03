import { Router } from 'express';
import { LanguageController } from './language.controller';
import { LanguageModel } from './language.model';
import { LanguageService } from './language.service';

export const languageRouter = Router();

const languageController = new LanguageController(new LanguageService(LanguageModel));

languageRouter.get('/event-type', languageController.getAllLanguages);

languageRouter.get('/event-type/:name', languageController.getLanguageByName);

languageRouter.post('event-type', languageController.createLanguage);

languageRouter.delete('event-type', languageController.deleteLanguage);
