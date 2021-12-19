import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CharacterModule } from './character/character.module';
import { ComponentModule } from './component/component.module';
import { StrategyModule } from './strategy/strategy.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: [__dirname+'/**/*.entity{.js,.ts}'],
      synchronize: true
    }),
    UserModule,
    CharacterModule,
    ComponentModule,
    StrategyModule
  ]
})
export class TotalModule {}
