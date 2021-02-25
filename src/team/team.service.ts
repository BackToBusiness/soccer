import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreatedDto } from '../common/result-created.interface';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { TeamRepository } from './team.repository';

@Injectable()
export class TeamService {

  constructor(@InjectRepository(Team) private readonly teamRepository: TeamRepository){}

  async create(data: CreateTeamDto): Promise<ResultCreatedDto> {
    let team = new Team()
    team.name = data.name
    team.division = data.division
    return this.teamRepository.save(team)
      .then(() => {
        return <ResultCreatedDto>{
          status: true,
          mensagem: "Player has been created"
        }
      })
      .catch((error) => {
        return <ResultCreatedDto>{
          status: false,
          mensagem: `ERROR - Player was not created - \n ${error}`
        }
      })
  }

  findAll() {
    return `This action returns all team`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
