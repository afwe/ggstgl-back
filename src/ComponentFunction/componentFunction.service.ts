import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ComponentEntity } from "./componentFunction.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(ComponentEntity)
        private readonly Repository: Repository<ComponentEntity>
    ) {}
    async findAll(): Promise<ComponentEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<ComponentEntity>{
        return await this.Repository.findOne({
            where: {componentFunctionId:id}
        });
    }
    async getByCharacterId(id): Promise<ComponentEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {componentFunctionId:id}
        );
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        this.Repository.save(newEntity);
    }
}