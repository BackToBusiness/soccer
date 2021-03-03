import { Team } from 'src/team/entities/team.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Coach {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @OneToOne(() => User, user => user.uuid)
    @JoinColumn()
    user: User

    @OneToOne(() => Team, team => team.coach)
    @JoinColumn()
    team: Team

    @Column({ nullable: false, type: "varchar" })
    name: string

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}