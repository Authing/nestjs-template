import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  // The available properties of configuration object are described here: 
  // https://github.com/expressjs/cors#configuration-options
  app.enableCors()

  await app.listen(3000);
}
bootstrap();
