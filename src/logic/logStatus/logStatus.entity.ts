import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class LogStatusEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    id: number;

    @Column({type:'int', name: 'times'})
    times: number;

}