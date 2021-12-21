import { Module } from "@nestjs/common";
import { StrategyController } from "./strategyFunction.controller";
import { Service } from "./strategyFunction.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyEntity } from "./strategyFunction.entity";
@Module({
    imports: [TypeOrmModule.forFeature([StrategyEntity])],
    controllers: [StrategyController],
    providers: [Service]
})
export class StrategyFunctionModule {}