import express from 'express';
import formOptionsController from './form-options.controller';

export const formOptionsRouter = express.Router();

formOptionsRouter.get('/filter-options', formOptionsController.getFilterOptions);
