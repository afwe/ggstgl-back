import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ComponentFunctionEntity } from "./componentFunction.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(ComponentFunctionEntity)
        private readonly Repository: Repository<ComponentFunctionEntity>
    ) {}
    async findAll(): Promise<ComponentFunctionEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<ComponentFunctionEntity>{
        return await this.Repository.findOne({
            where: {componentFunctionId:id}
        });
    }
    async getByCharacterId(id): Promise<ComponentFunctionEntity>{
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