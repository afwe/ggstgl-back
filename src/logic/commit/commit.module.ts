import { Module } from "@nestjs/common";
import { CommitController } from "./commit.controller";
import { Service } from "./commit.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommitEntity } from "./commit.entity";
import { ComponentService } from "../component/exportService.service";
import { StrategyService } from "../strategy/StrategyServer.service";
import { UserService } from "../user/exportService.service";
import { ComponentModule } from "../component/component.module";
import { StrategyModule } from "../strategy/strategy.module";
import { UserModule } from "../user/user.module";
import { ComponentEntity } from "../component/component.entity";
import { StrategyEntity } from "../strategy/strategy.entity";
import { UserEntity } from "../user/user.entity";
@Module({
    imports: [TypeOrmModule.forFeature([CommitEntity]),
                TypeOrmModule.forFeature([ComponentEntity]),
                TypeOrmModule.forFeature([StrategyEntity]),
                TypeOrmModule.forFeature([UserEntity]),
                ComponentModule, StrategyModule, UserModule
            ],
    controllers: [CommitController],
    providers: [Service, ComponentService, StrategyService, UserService]
})
export class CommitModule {}