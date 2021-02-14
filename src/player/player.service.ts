import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreatedDto } from './dto/result-created.dto';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayerRepository } from './player.repository';

@Injectable()
export class PlayerService {

  constructor(@InjectRepository(PlayerRepository) private playerRepository: Repository<Player>) { }

  async create(data: CreatePlayerDto): Promise<ResultCreatedDto> {
    let player = new Player()
    player.name = data.name
    player.age = data.age
    return this.playerRepository.save(player)
      .then((result) => {
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
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
