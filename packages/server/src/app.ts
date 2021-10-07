import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import passport from 'passport';

import passportConfig from './auth/passport.config';
import { connect as connectToMongo } from './db/connect';
import { log } from './logger/logger';
import { errorMiddleware } from './middleware/error.middleware';
import { baseRouter } from './base-router';

//FIXME: remove to config file
//TODO: find better solution for ENV variables
dotenv.config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`) });

passportConfig(passport);

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', baseRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    await connectToMongo();
    app.listen(process.env.PORT, () => {
      log.info(`application is running on port ${process.env.PORT}.`);
    });
  } catch (err) {
    log.error(err);
  }
};

start();
