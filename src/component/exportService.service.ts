import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ComponentEntity } from "./component.entity";
@Injectable()
export class ComponentService{
    constructor(
        @InjectRepository(ComponentEntity)
        private readonly Repository: Repository<ComponentEntity>
    ) {}
    async findAll(): Promise<ComponentEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<ComponentEntity>{
        return await this.Repository.findOne({
            where: {componentId:id}
        });
    }
    async getByCharacterId(id): Promise<ComponentEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {componentId:id}
        );
    }
    async createComponent(data) {
        let newEntity = this.Repository.create(data);
        return this.Repository.save(newEntity);
    }
}