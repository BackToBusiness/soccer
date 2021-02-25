import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { CoachRepository } from './coach.repository';
import { ResultCreatedDto } from '../common/result-created.interface';
import { Player } from '../player/entity/player.entity';
import { User } from '../user/entities/user.entity';
import { Coach } from './entities/coach.entity';

@Injectable()
export class CoachService {

  constructor(@InjectRepository(CoachRepository) private readonly coachRepository: CoachRepository) { }

  async create(data: CreateCoachDto): Promise<ResultCreatedDto> {
    let coach = new Coach()
    
    let user = new User()
    user.uuid = data.userUUID

    coach.user = user
    return this.coachRepository.save(coach)
      .then(() => {
        return <ResultCreatedDto>{
          status: true,
          mensagem: "Coach has been created"
        }
      })
      .catch((error) => {
        return <ResultCreatedDto>{
          status: false,
          mensagem: `ERROR - Coach was not created - \n ${error}`
        }
      })
  }

  findAll() {
    return `This action returns all coach`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coach`;
  }

  update(id: number, updateCoachDto: UpdateCoachDto) {
    return `This action updates a #${id} coach`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}
