import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, Unique, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {

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

    @Exclude()
    @Column()
    salt: string

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt)
        return hash === this.password
    }

}