import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ComponentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    componentFunctionId: number;

    @Column({type:'int', name: 'component_id'})
    characterId: number;

    @Column({type:'float', name: 'component_function_rank', nullable: true})
    componentRank: number;
}