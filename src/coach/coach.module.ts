import { Module } from '@nestjs/common';
import { CoachController } from './coach.controller';
import { CoachService } from './coach.service';
import { CoachRepository } from './coach.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CoachRepository])],
  controllers: [CoachController],
  providers: [CoachService]
})
export class CoachModule {}
