import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { CoachModule } from './coach/coach.module';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { TechnicalTeamModule } from './technical-team/technical-team.module';

@Module({
  imports: [
    PlayerModule,
    HealthModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    CoachModule,
    UserModule,
    TeamModule,
    TechnicalTeamModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
