import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CommitEntity } from "./commit.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(CommitEntity)
        private readonly Repository: Repository<CommitEntity>
    ) {}
    async findAll(): Promise<CommitEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<CommitEntity>{
        return await this.Repository.findOne({
            where: {commitId:id}
        });
    }
    async getByCharacterId(id): Promise<CommitEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {commitId:id}
        );
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        return this.Repository.save(newEntity);
    }
}