import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppDataSource.initialize();
  console.log('LIGOU DATABASE');
  const port = parseInt(process.env.CONTAINER_PORT, 10);
  const host = process.env.HOST;

  app.listen(port, () => {
    console.log(`API INT REST em ${host}:${port}`);
  });
}
bootstrap();
