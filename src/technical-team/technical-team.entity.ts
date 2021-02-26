import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class TechnicalTeam extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
}