import './common/env';
import Server from './common/server';
import Database from './common/database';
import logger from './common/logger';

logger.info(process.env.NODE_ENV, process.env.MONGODB_URI);
const port = Number(process.env.PORT ? process.env.PORT : 4300);
const databaseUri =
  process.env.NODE_ENV === 'production'
    ? String(process.env.MONGODB_URI)
    : String(process.env.MONGODB_URI_DEV);

const db = new Database(databaseUri);
export default new Server().database(db).listen(port);
