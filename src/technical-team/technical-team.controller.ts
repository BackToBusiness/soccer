import { Body, Controller, Get, Post } from '@nestjs/common';
import { TechnicalTeam } from './technical-team.entity';

@Controller('technical-teams')
export class TechnicalTeamController {

    @Post()
    async create() {
        let techteam = new TechnicalTeam()
        techteam.name = 'Diretoria do Mengão'
        return techteam.save()
    }
}
