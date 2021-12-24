import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { StrategyFuncitonEntity } from "./strategyFunction.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(StrategyFuncitonEntity)
        private readonly Repository: Repository<StrategyFuncitonEntity>
    ) {}
    async findAll(): Promise<StrategyFuncitonEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<StrategyFuncitonEntity>{
        return await this.Repository.findOne({
            where: {strategyFunctionId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {strategyFunctionId:id}
        );
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        this.Repository.save(newEntity);
    }
}