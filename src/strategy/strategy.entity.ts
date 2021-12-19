import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class StrategyEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    strategyId: number;

    @Column({type:'int', name: 'character_id'})
    characterId: number;

    @Column({type:'int', name: 'opponent_id'})
    opponentId: number;

    @Column({type:'varchar', name: 'strategy_description', nullable: true})
    strategyDescription: string;

    @Column({type:'int', name: 'strategy_rank', nullable: true})
    strategyRank: number;
}