import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', name:'user_id'})
    userId: string;

    @Column({type:'varchar', name:'password'})
    userPwd: string;

    @Column({type:'varchar', name:'user_name', nullable: true, default: " "})
    userName: string;

    @Column({type:'int', name:'is_admin', default:0})
    isAdmin: number;
}