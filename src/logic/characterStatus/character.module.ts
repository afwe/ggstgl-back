import { Module } from "@nestjs/common";
import { CharacterStatusController } from "./characterStatus.controller";
import { Service } from "./characterStatus.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterStatusEntity } from "./characterStatus.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CharacterStatusEntity])],
    controllers: [CharacterStatusController],
    providers: [Service]
})
export class CharacterStatusModule {}