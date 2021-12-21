import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class StrategyEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    strategyFunctionId: number;

    @Column({type:'int', name: 'strategy_id'})
    strategytId: number;

    @Column({type:'longtext', name: 'strategy_function_description', nullable: true})
    strategyFunctionDescription: string;

    @Column({type:'float', name: 'strategy_function_rank', nullable: true})
    strategyFunctionRank: number;
}