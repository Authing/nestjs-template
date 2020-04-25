import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. 
  // Docs: https://github.com/helmetjs/helmet#how-it-works
  app.use(helmet());

  // Enable CORS
  // The available properties of configuration object are described here: 
  // https://github.com/expressjs/cors#configuration-options
  app.enableCors()


  // Get port from .env file
  const port = app.get(ConfigService).get('port') || 3000
  await app.listen(port);
}
bootstrap();
