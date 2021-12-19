import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CharacterEntity } from "./character.entity";
@Injectable()
export class Service{
    constructor(
        @InjectRepository(CharacterEntity)
        private readonly Repository: Repository<CharacterEntity>
    ) {}
    async findAll(): Promise<CharacterEntity[]> {
        return await this.Repository.find();
    }
    async get(id): Promise<CharacterEntity>{
        return await this.Repository.findOne({
            where: {characterId:id}
        });
    }
    async update(data) {
        let newEntity = this.Repository.create(data);
        this.Repository.save(newEntity);
    }

}