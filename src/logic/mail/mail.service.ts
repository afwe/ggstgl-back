import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { MailEntity } from "./mail.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(MailEntity)
        private readonly Repository: Repository<MailEntity>
    ) {}
    async findAll(): Promise<MailEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<MailEntity>{
        return await this.Repository.findOne({
            where: {mailId:id}
        });
    }
    async getByUserId(id): Promise<MailEntity[]>{
        return await this.Repository.find({
            where: {userId:id}
        });
    }
    async read(id): Promise<UpdateResult>{
        return await this.Repository.update({mailId: id},{isRead: 1});
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {mailId:id}
        );
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        this.Repository.save(newEntity);
    }
}