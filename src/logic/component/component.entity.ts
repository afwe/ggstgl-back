import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class ComponentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    componentId: number;

    @Column({type:'int', name: 'character_id'})
    characterId: number;

    @Column({type:'longtext', name: 'component_description', nullable: true})
    componentDescription: string;

    @Column({type:'int', name: 'component_rank', nullable: true, default: 0})
    componentRank: number;

    @Column({type:'int', name:'commiterId', nullable: true})
    commiterId: number;
}