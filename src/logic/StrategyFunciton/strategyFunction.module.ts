import { Module } from "@nestjs/common";
import { StrategyController } from "./strategyFunction.controller";
import { Service } from "./strategyFunction.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyFuncitonEntity } from "./strategyFunction.entity";
@Module({
    imports: [TypeOrmModule.forFeature([StrategyFuncitonEntity])],
    controllers: [StrategyController],
    providers: [Service]
})
export class StrategyFunctionModule {}