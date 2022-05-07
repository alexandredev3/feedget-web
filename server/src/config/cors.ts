import cors from 'cors';

import { NODE_ENV, CORS_ORIGIN } from '../utils/environment';

export const corsConfig = cors({
  "origin": NODE_ENV === 'development' ? '*' : CORS_ORIGIN,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
})