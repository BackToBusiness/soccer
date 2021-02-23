import { User } from "src/user/entities/user.entity";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @OneToOne(() => User, user => user.uuid)
  @JoinColumn()
  user: User

  @Column({ nullable: false, type: "varchar" })
  name!: string;

  @Column({ nullable: false, type: "float", default: 0.0 })
  age: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}