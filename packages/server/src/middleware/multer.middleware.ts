import { Request } from 'express';
import multer from 'multer';

import { log } from '../logger/logger';
import { BadRequestError } from '../error-handler/BadRequestError';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '../../../uploads');
  },
  filename: (req, file, cb) => {
    log.info('File uploaded', file.originalname);
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const extensionFilter = function (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  // accept image, pdf and doc only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|doc|docx|pdf|pptx)$/)) {
    return cb(new BadRequestError('Only image files are allowed!'));
  }
  cb(null, true);
};

export const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: extensionFilter,
}).single('file');
