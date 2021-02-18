import { Controller, Get, Post, Body, Put, Param, Delete, Patch, ParseIntPipe, Query, ParseUUIDPipe } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ResultCreatedDto } from './dto/result-created.dto';
import { Player } from './entities/player.entity';
import { FilterPlayerDto } from './dto/filter-player.dto';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) { }

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto): Promise<ResultCreatedDto> {
    console.log(createPlayerDto);
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Get()
  findPlayersByCriteria(@Query('filter') filterPlayerDto: FilterPlayerDto): Promise<Player[]> {
    return this.playerService.findPlayersByCriteria(filterPlayerDto)
  }

  @Put(':uuid')
  async update(@Param('uuid', new ParseUUIDPipe()) uuid: string, @Body() updatePlayerDto: UpdatePlayerDto): Promise<UpdatePlayerDto> {
    return this.playerService.update(uuid, updatePlayerDto);
  }

  @Patch(':id/age')
  updateAge(@Param('id') id: string, @Body('age', ParseIntPipe) age: number) {
    return this.playerService.updateAge(id, age);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.playerService.delete(id);
  }

  @Get('/name/:nome')
  async buscaNome(@Param('nome') nome: string): Promise<Player[]> {
    return this.playerService.buscaNome(nome);
  }
}
