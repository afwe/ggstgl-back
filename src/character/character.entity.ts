import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CharacterEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    characterId: number;

    @Column({type:'varchar', name: 'character_name'})
    characterName: string;

    @Column({type:'varchar', name: 'character_img', nullable: true,})
    characterImg: string;
}