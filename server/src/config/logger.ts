import pino from 'pino';

import { LOG_ENABLED } from '../utils/environment';

export const logger = pino({
  enabled: !!LOG_ENABLED,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})