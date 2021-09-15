import express from 'express';
import { uploadFile } from '../middleware/multer.middleware';
import uploadFilesController from './upload-files.controller';

export const uploadFilesRouters = express.Router();

uploadFilesRouters.post('/upload-image', uploadFile, uploadFilesController.uploadImage);

uploadFilesRouters.post('/upload-cv', uploadFile, uploadFilesController.uploadCV);
