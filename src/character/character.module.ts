import { Module } from "@nestjs/common";
import { CharacterController } from "./character.controller";
import { Service } from "./character.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterEntity } from "./character.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CharacterEntity])],
    controllers: [CharacterController],
    providers: [Service]
})
export class CharacterModule {}