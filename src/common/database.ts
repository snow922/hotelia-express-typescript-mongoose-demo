import mongoose from 'mongoose';
import logger from './logger';

export interface IDatabase {
  init(): void;
}

export default class Database implements IDatabase {
  uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  init(): void {
    mongoose
      .connect(this.uri, {})
      .then(() => {
        logger.info('Database connected.');
      })
      .catch((err) => {
        logger.error('Database connection error.', err.stack);
        process.exit(1);
      });

    const db = mongoose.connection;

    db.on('error', (err: Error) => {
      logger.error('MongoDB error:\n' + err.stack);
    });
  }
}
