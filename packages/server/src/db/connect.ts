import mongoose from 'mongoose';
import { log } from '../logger/logger';

export const connect = (): void => {
  const url = 'mongodb://localhost:27017/exdl-evnts-db';
  //mongo conection
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => log.info('Mongooooose!!!'))
    .catch((err) => log.error(`Smth went wrong... ${err}`));
};
