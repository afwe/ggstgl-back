import { Module } from "@nestjs/common";
import { LogStatusController } from "./logStatus.controller";
import { Service } from "./logStatus.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LogStatusEntity } from "./logStatus.entity";
@Module({
    imports: [TypeOrmModule.forFeature([LogStatusEntity])],
    controllers: [LogStatusController],
    providers: [Service]
})
export class LogStatusModule {}