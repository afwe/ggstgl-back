import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CharacterStatusEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    characterStatusId: number;

    @Column({type:'int', name: 'log_time'})
    logTime: number;

    @Column({type: 'int', name:'character_id'})
    characterId: number;

    @Column({type:'int', name:'opponent_id', nullable:true, default: -1}) //-1 null;
    opponentId: number;

}