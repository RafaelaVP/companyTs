import 'reflect-metadata';
import express from 'express';
import { connection } from './infra/database';
import { routes } from './routes';

if (process.env.NODE_ENV !== 'test') {
  connection();
}

const app = express();

app.use(express.json());

app.use(routes);

export { app };
