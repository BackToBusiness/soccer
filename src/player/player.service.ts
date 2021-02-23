import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultCreatedDto } from '../common/dto/result-created.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entity/player.entity';
import { PlayerRepository } from './player.repository';
import { FilterPlayerDto } from './dto/filter-player.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class PlayerService {

  constructor(
    @InjectRepository(PlayerRepository) private readonly playerRepository: PlayerRepository
  ) { }

  async create(data: CreatePlayerDto): Promise<ResultCreatedDto> {
    let player = new Player()
    let user = new User()
    user.uuid = data.userUUID
    player.user = user
    player.name = data.name
    player.age = data.age
    return this.playerRepository.save(player)
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

  async findAll(): Promise<Player[]> {
    return this.playerRepository.find({ relations: ["user"] });
  }

  async findPlayersByCriteria(filterPlayerDto: FilterPlayerDto): Promise<Player[]> {
    return this.playerRepository.getPlayersByCriteria(filterPlayerDto);
  }

  async findOne(id: string): Promise<Player> {
    const player = await this.playerRepository.findOne(id)
    if (!player) {
      throw new NotFoundException(`A player with ID ${id} not found`)
    }
    return player
  }

  async update(uuid: string, updatePlayerDto: UpdatePlayerDto): Promise<any> {
    const player = await this.playerRepository.findOne(uuid)
    if (!player) {
      throw new NotFoundException(`A player with ID ${uuid} not found`)
    }
    updatePlayerDto.updatedAt = new Date()
    return this.playerRepository.update(uuid, updatePlayerDto)
  }

  async updateAge(id: string, age: number): Promise<Player> {
    const player = await this.findOne(id)
    player.age = age
    player.updatedAt = new Date()
    return player.save()
  }

  async delete(id: string): Promise<void> {
    const player = await this.playerRepository.delete(id)
    if (player.affected === 0) {
      throw new NotFoundException(`A player with ID ${id} not found`)
    }
  }

  async buscaNome(nome: string): Promise<Player[]> {
    return this.playerRepository.find({
      where: [{ "name": nome }]
    });
  }
}
