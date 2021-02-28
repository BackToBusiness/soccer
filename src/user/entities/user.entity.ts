import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Unique(['username'])
    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    @Exclude()
    password: string

    @Unique(['email'])
    @Column({ nullable: false })
    email: string

}