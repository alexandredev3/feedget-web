import express from 'express';

import { routes } from './routes';
import { corsConfig } from './config/cors';

export const app = express();

app.use(corsConfig);
app.use(express.json());
app.use(routes);