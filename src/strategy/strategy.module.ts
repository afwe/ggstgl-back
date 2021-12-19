import { Module } from "@nestjs/common";
import { StrategyController } from "./strategy.controller";
import { Service } from "./strategy.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyEntity } from "./strategy.entity";
@Module({
    imports: [TypeOrmModule.forFeature([StrategyEntity])],
    controllers: [StrategyController],
    providers: [Service]
})
export class StrategyModule {}