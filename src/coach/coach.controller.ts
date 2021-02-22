import { Controller, Get } from '@nestjs/common';
import { Coach } from './entity/coach.entity';
import { CoachService } from './coach.service';

@Controller('coaches')
export class CoachController {

    constructor(private readonly coachService: CoachService) { }

    @Get()
    async getAll(): Promise<Coach[]> {
        return this.coachService.findAll()
    }
}
