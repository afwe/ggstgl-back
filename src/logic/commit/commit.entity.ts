import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class CommitEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    commitId: number;

    @Column({type:'int', name: 'user_id'})
    userId: number;

    @Column({type:'int', name: 'commit_type'}) //0 component 1 strategy
    commitType: number;
    @Column({type:'int', name: 'character_id'})
    characterId: number;
    @Column({type: 'int', name: 'opponent_id', nullable: true, default: 0})
    opponentId: number;
    @Column({type:'longtext', name: 'commit_description', nullable: true})
    commitDescription: string;

    @Column({type:'int', name: 'commit_status', nullable: true, default: 0}) //0-null unhandle 1 resolved 2 rejected
    commitStatus: number;
}