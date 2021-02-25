import { User } from 'src/user/entities/user.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Team } from '../../team/entities/team.entity';


@Entity()
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @OneToOne(() => User, user => user.uuid, { eager: false })
  @JoinColumn()
  user: User

  @ManyToOne(() => Team, team => team.players)
  team: Team

  @Column({ nullable: false, type: "varchar" })
  name!: string;

  @Column({ nullable: false, type: "float", default: 0.0 })
  age: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}