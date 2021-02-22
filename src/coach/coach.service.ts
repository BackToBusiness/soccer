import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from './entity/coach.entity';
import { CoachRepository } from './coach.repository';

@Injectable()
export class CoachService {

    constructor(@InjectRepository(CoachRepository) private coachRepository: CoachRepository) { }

    async findAll(): Promise<Coach[]> {
        return this.coachRepository.find()
    }
}
