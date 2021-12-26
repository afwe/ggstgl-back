import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class MailEntity extends BaseEntity {
    @PrimaryGeneratedColumn({type:'int', name: 'id'})
    mailId: number;

    @Column({type:'int', name: 'user_id'})
    userId: number;

    @Column({type:'longtext', name: 'mail_content'})
    mailContent: string;

    @Column({type: 'int', nullable: true, default: 0}) //not read: 0;read: 1
    isRead: number;
}