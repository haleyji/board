import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();

  const serverConfig = config.get('server');
  const port = serverConfig.get('port');
  const app = await NestFactory.create(AppModule);
  logger.log(`Application is running on port ${port}`);
  await app.listen(port);
}
bootstrap();
