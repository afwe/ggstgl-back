import { NestFactory } from '@nestjs/core';
import { TotalModule } from './total.module';
import * as cookieParser from 'cookie-parser';
const fs = require('fs');
process.on('unhandledRejection', (reas,p)=>{
  console.log("!");
  console.log(reas);
  console.log(p);
})
function delFile(path, reservePath) {
  if (fs.existsSync(path)) {
      if (fs.statSync(path).isDirectory()) {
          let files = fs.readdirSync(path);
          files.forEach((file, index) => {
              let currentPath = path + "/" + file;
              if (fs.statSync(currentPath).isDirectory()) {
                  delFile(currentPath, reservePath);
              } else {
                  fs.unlinkSync(currentPath);
              }
          });
          if (path != reservePath) {
              fs.rmdirSync(path);
          }
      } else {
          fs.unlinkSync(path);
      }
  }
}
async function bootstrap() {
  require('child_process').fork('./src/test.js');
  const app = await NestFactory.create(TotalModule, { cors: {credentials: true, origin: process.env.CLIENT_URL} });
  app.use(cookieParser('huaweihao'));
  app.enableCors();
  await app.listen(8881);
}
bootstrap();
