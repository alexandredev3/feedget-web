import { app } from './app'
import { logger } from './config/logger';
import { PORT } from './utils/environment';

app.listen(PORT, () => {
  logger.info(`Server is running at 3333`);
});