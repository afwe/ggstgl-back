import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CookieMiddleware } from "./middleware/userMiddleware";
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlOpt } from './util/sqlOpt'

import { UserModule } from './logic/user/user.module';
import { CharacterModule } from './logic/character/character.module';
import { ComponentModule } from './logic/component/component.module';
import { StrategyModule } from './logic/strategy/strategy.module';
import { ComponentFunctionModule } from './logic/ComponentFunction/componentFunction.module';
import { StrategyFunctionModule } from './logic/StrategyFunciton/StrategyFunction.module';
import { MailModule } from './logic/mail/mail.module';
import { CommitModule } from './logic/commit/commit.module';
import { CounterModule } from './logic/counter/counter.module';
import { CharacterStatusModule } from './logic/characterStatus/character.module';
import { LogStatusModule } from './logic/logStatus/logStatus.module';


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
    StrategyModule,
    ComponentFunctionModule,
    StrategyFunctionModule,
    MailModule,
    CommitModule,
    CounterModule,
    CharacterStatusModule,
    LogStatusModule
  ]
})
export class TotalModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(CookieMiddleware).forRoutes('commit');
  }
}
