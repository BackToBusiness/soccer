import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachRepository } from './coach.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CoachRepository])],
  controllers: [CoachController],
  providers: [CoachService]
})
export class CoachModule {}
