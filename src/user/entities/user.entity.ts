import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    @Exclude()
    password: string

    @Column({ nullable: false })
    email: string

}