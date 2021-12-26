import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CharacterStatusEntity } from "./characterStatus.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(CharacterStatusEntity)
        private readonly Repository: Repository<CharacterStatusEntity>
    ) {}
    async findAll(): Promise<CharacterStatusEntity[]> {
        return await this.Repository.find();
    }
    /**
     *
     *
     * @param {*} data
     * @return {*}  {Promise<CharacterStatusEntity>}
     * @memberof Service
     */
    async updateByCharacterIdAndOpponentId(data): Promise<UpdateResult>{
        let status = await this.Repository.findOne({characterId: data.characterId});
        return await this.Repository.update(
            {
                characterStatusId: status.characterStatusId,
                opponentId: status.opponentId
            },
            {
                logTime: status.logTime+1
            }
        );
    }
    /**
     *
     *
     * @param {*} data
     * @return {*}  {Promise<UpdateResult>}
     * @memberof Service
     */
    async updateByCharacterId(data): Promise<UpdateResult>{
        let status = await this.Repository.findOne({characterId: data.characterId});
        return await this.Repository.update(
            {
                characterStatusId: status.characterStatusId,
            },
            {
                logTime: status.logTime+1
            }
        );
    }
    async getByCharacterId(id): Promise<CharacterStatusEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.Repository.delete(
           {characterStatusId:id}
        );
    }
    async update(data) {
        let newEntity = await this.Repository.create(data);
        console.log(newEntity);
        return await this.Repository.save(newEntity);
    }
}