import { Module } from "@nestjs/common";
import { CommitController } from "./commit.controller";
import { Service } from "./commit.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommitEntity } from "./commit.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CommitEntity])],
    controllers: [CommitController],
    providers: [Service]
})
export class CommitModule {}