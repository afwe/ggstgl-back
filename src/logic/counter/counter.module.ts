import { Module } from "@nestjs/common";
import { CounterController } from "./counter.controller";
import { Service } from "./counter.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CounterEntity } from "./counter.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CounterEntity])],
    controllers: [CounterController],
    providers: [Service]
})
export class CounterModule {}