import { NestFactory } from '@nestjs/core';
import { TotalModule } from './total.module';
import * as cookieParser from 'cookie-parser' 

async function bootstrap() {
  const app = await NestFactory.create(TotalModule);
  app.use(cookieParser('huaweihaohuaweimei'));
  app.enableCors();
  await app.listen(8881);
}
bootstrap();
