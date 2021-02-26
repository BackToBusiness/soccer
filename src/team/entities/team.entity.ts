import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Division } from "../team.enum";
import { Player } from "../../player/entity/player.entity";
import { Coach } from '../../coach/entities/coach.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column()
    name: string

    @Column()
    division: Division

    @OneToOne(() => Coach, coach => coach.uuid)
    coach: Coach

    @OneToMany(() => Player, player => player.team)
    players: Player[]
}
