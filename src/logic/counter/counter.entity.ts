import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CounterEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    counterId: number;

    @Column({type:'int', name: 'character_id'})
    characterId: number;

    @Column({type:'longtext', name: 'opponent_id', nullable: true})
    opponentId: string;

    @Column({type:'int', name: 'counter_rank', nullable: true, default: 0})
    counterRank: number;

}