import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from './player.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerRepository])],
  controllers: [PlayerController],
  providers: [PlayerService]
})
export class PlayerModule { }
