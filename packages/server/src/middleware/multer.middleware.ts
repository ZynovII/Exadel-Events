import { Request, Response } from 'express';
import multer from 'multer';

import { log } from '../logger/logger';
import { BadRequestError } from '../error-handler/BadRequestError';
import { NextFunction } from 'express-serve-static-core';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '../../../uploads');
  },
  filename: (req, file, cb) => {
    log.info(`File uploaded, ${file.originalname}`);
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

const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: extensionFilter,
}).single('file');

export const uploadFile = (req: Request, res: Response, next: NextFunction): void => {
  upload(req, res, function (error) {
    if (error) {
      //instanceof multer.MulterError
      res.status(413);
      if (error.code == 'LIMIT_FILE_SIZE') {
        error.message = 'File Size is too large. Allowed file size is 200KB';
        error.success = false;
      }
      return res.json(error);
    } else if (!req.file) {
      res.status(500);
      res.json('file not found');
    } else {
      next();
    }
  });
};
