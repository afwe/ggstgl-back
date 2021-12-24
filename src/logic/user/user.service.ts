import { Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

const retPromise = (isSuccess, value)=>{
    if(isSuccess)
    return new Promise((resolve:(value: Object)=>void, reject:(value: Object)=>void)=>{
        resolve(value);
    });
    else
    return new Promise((resolve:(value: Object)=>void, reject:(value: Object)=>void)=>{
        resolve(value);
    });
}

@Injectable()
export class Service{
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
    async login(data): Promise<Object>{
        let user = await this.userRepository.findOne({
            where: {userId:data.userId}
        });
        if(user.userPwd === data.userPwd){
            return retPromise(true, user);
        } else {
            return retPromise(false, {
                msg: '登陆失败'
            });
        }
    }
    async register(data): Promise<Object>{
        let oldEntity = await this.userRepository.findOne({
            where: {userId: data.userId}
        });
        if(!oldEntity){
            let newEntity = await this.userRepository.create(data);
            return this.userRepository.save(newEntity);
        } else{
            return retPromise(false, {
                msg: 'userId重复'
            });
        }
    }
    async logout(data): Promise<Object>{
        return retPromise(true,{});
    }
}