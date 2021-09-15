import multer from 'multer';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '../../../uploads');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() + '--' + file.originalname);
  },
});

export const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');
