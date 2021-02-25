import { Repository, EntityRepository } from 'typeorm';
import { Coach } from './entities/coach.entity';

@EntityRepository(Coach)
export class CoachRepository extends Repository<Coach>{}