import { User } from 'src/user/entities/user.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Coach extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ nullable: false })
    @OneToOne(() => User)
    @JoinColumn()
    userUUID: string

    @Column({ nullable: false, type: "varchar" })
    name: string

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}