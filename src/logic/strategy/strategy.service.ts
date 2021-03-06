import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { StrategyEntity } from "./strategy.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(StrategyEntity)
        private readonly Repository: Repository<StrategyEntity>
    ) {}
    async findAll(): Promise<StrategyEntity[]> {
        return await this.Repository.find();
    }
    async getById(id): Promise<StrategyEntity>{
        return await this.Repository.findOne({
            where: {strategyId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {strategyId:id}
        );
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        this.Repository.save(newEntity);
    }
    async getIds(cid, oid): Promise<StrategyEntity>{
        return await this.Repository.query(`SELECT id FROM strategy_entity WHERE character_id=${cid} AND opponent_id=${oid}`);
    }
}