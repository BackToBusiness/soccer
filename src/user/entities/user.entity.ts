import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Player } from "src/player/entity/player.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @IsNotEmpty({ message: 'Username cannot be null' })
    @Column({ nullable: false })
    username: string

    @IsNotEmpty()
    @Column({ nullable: false })
    @Exclude()
    password: string

    @IsEmail()
    @IsNotEmpty()
    @Column({ nullable: false })
    email: string

}
