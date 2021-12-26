import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { LogStatusEntity } from "./logStatus.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(LogStatusEntity)
        private readonly Repository: Repository<LogStatusEntity>
    ) {}
    /**
     *
     * @param {*} characterId
     * @return {*}  {Promise<LogStatusEntity>}
     * @memberof Service
     */
    async get(): Promise<LogStatusEntity>{
        return await this.Repository.findOne();
    }
    async update(): Promise<UpdateResult> {
        let status = await this.Repository.findOne();
        return await this.Repository.update({id: status.id}, {times: status.times+1});
    }
}