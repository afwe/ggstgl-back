import { Module } from "@nestjs/common";
import { ComponentController } from "./component.controller";
import { Service } from "./component.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComponentEntity } from "./component.entity";
@Module({
    imports: [TypeOrmModule.forFeature([ComponentEntity])],
    controllers: [ComponentController],
    providers: [Service]
})
export class ComponentModule {}