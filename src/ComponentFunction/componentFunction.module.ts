import { Module } from "@nestjs/common";
import { ComponentController } from "./componentFunction.controller";
import { Service } from "./componentFunction.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComponentEntity } from "./componentFunction.entity";
@Module({
    imports: [TypeOrmModule.forFeature([ComponentEntity])],
    controllers: [ComponentController],
    providers: [Service]
})
export class ComponentFunctionModule {}