import { Module } from "@nestjs/common";
import { StrategyController } from "./strategy.controller";
import { Service } from "./strategy.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyEntity } from "./strategy.entity";
import { StrategyService } from "./StrategyServer.service";
@Module({
    imports: [TypeOrmModule.forFeature([StrategyEntity])],
    controllers: [StrategyController],
    providers: [Service, StrategyService],
    exports: [StrategyService]
})
export class StrategyModule {}