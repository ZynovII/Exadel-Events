import mongoose from 'mongoose';
import { log } from '../logger/logger';

export const connect = async (): Promise<void> => {
  const url = 'mongodb://localhost:27017/exdl-evnts-db';
  //mongo conection
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    log.info('Mongooooose!!!');
  } catch (err) {
    log.error(`Smth went wrong... ${err}`);
  }
};
