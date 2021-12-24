import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { Service } from "./mail.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailEntity } from "./mail.entity";
@Module({
    imports: [TypeOrmModule.forFeature([MailEntity])],
    controllers: [MailController],
    providers: [Service]
})
export class MailModule {}