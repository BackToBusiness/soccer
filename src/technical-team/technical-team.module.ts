import { Module } from '@nestjs/common';
import { TechnicalTeamController } from './technical-team.controller';

@Module({
  controllers: [TechnicalTeamController]
})
export class TechnicalTeamModule {}
