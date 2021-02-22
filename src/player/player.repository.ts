import { EntityRepository, Repository } from 'typeorm';
import { FilterPlayerDto } from './dto/filter-player.dto';
import { Player } from './entity/player.entity';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player>{

    async getPlayersByCriteria(filterPlayerDto: FilterPlayerDto): Promise<Player[]> {
        const { name, age } = filterPlayerDto
        const query = this.createQueryBuilder('player')
        if (name) {
            query.andWhere('player.name = :name', { name })
        }
        if (age) {
            query.andWhere('player.age = :age', { age })
        }
        return await query.getMany()
    }
}