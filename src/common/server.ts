import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { IDatabase } from './database';
import logger from './logger';

const app = express();

export default class Server {
  constructor() {}

  router(router: any): Server {
    app.use('/api', router);
    return this;
  }

  database(db: IDatabase): Server {
    db.init();

    return this;
  }

  listen(port: number): Application {
    app.listen(port, () => {
      logger.info(`Server initialized on port ${port}`);
    });

    return app;
  }
}
