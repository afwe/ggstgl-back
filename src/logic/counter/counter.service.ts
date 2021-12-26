import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CounterEntity } from "./counter.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(CounterEntity)
        private readonly Repository: Repository<CounterEntity>
    ) {}
    async findAll(): Promise<CounterEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<CounterEntity>{
        return await this.Repository.findOne({
            where: {counterId:id}
        });
    }
    async getByCharacterId(id): Promise<CounterEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {counterId:id}
        );
    }
    async update(data) {
        let newEntity = await this.Repository.create(data);
        console.log(newEntity);
        return await this.Repository.save(newEntity);
    }
}