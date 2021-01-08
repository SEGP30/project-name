import { NestFactory } from '@nestjs/core';
import { App_Module } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(App_Module);
  await app.listen(3000);
}
bootstrap();
