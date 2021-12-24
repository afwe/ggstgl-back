import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { Service } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { UserService } from "./exportService.service";
@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [Service],
    exports: [UserService]
})
export class UserModule {}