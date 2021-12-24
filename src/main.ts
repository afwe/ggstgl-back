import { NestFactory } from '@nestjs/core';
import { TotalModule } from './total.module';
import * as cookieParser from 'cookie-parser';
var cors = require('cors')
process.on('unhandledRejection', (reas,p)=>{
  console.log("!");
  console.log(reas);
  console.log(p);
})
async function bootstrap() {
  require('child_process').fork('./src/test.js');
  const app = await NestFactory.create(TotalModule, { cors: {credentials: true, origin: process.env.CLIENT_URL} });
  app.use(cookieParser('huaweihao'));
  app.enableCors();
  await app.listen(8881);
}
bootstrap();
