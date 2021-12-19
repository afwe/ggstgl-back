import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

const retPromise = (isSuccess, value)=>{
    if(isSuccess)
    return new Promise((resolve:(value: string)=>void, reject:(value: string)=>void)=>{
        resolve(value);
    });
    else
    return new Promise((resolve:(value: string)=>void, reject:(value: string)=>void)=>{
        reject(value);
    });
}

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}
    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.query('select * from user');
    }
    async getById(id): Promise<UserEntity>{
        return await this.userRepository.findOne({
            where: {id:id}
        });
    }
    async deleteById(id): Promise<DeleteResult>{
        return await this.userRepository.delete(
           {id:id}
        );
    }
    async update(data) {
        let newEntity = this.userRepository.create(data);
        this.userRepository.save(newEntity);
    }
    async login(data) {
        let user = await this.userRepository.findOne({
            where: {id:data.id}
        });
        if(user.password === data.password){
            return retPromise(true, 'success');
        } else {
            return retPromise(false, 'failed');
        }
    }
    async register(data): Promise<string>{
        let oldEntity = await this.userRepository.findOne({
            where: {id: data.id}
        });
        if(!oldEntity){
            let newEntity = this.userRepository.create(data);
            this.userRepository.save(newEntity);
            return retPromise(true, 'success');
        } else{
            return retPromise(false, 'failed');
        }
    }
}