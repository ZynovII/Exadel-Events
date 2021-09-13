import { Router } from 'express';
import languageController from './language.controller';

export const languageRouter = Router();

languageRouter.get('/language', languageController.getAllLanguages);

languageRouter.get('/language/:name', languageController.getLanguageByName);

languageRouter.post('/language', languageController.createLanguage);

languageRouter.delete('/language', languageController.deleteLanguage);
