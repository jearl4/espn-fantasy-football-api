import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueController } from './league/league.controller';
import { LeagueModule } from './league/league.module';
import { LeagueService } from './league/league.service';
import { TeamDetailController } from './team-detail/team-detail.controller';
import { TeamDetailModule } from './team-detail/team-detail.module';
import { TeamDetailService } from './team-detail/team-detail.service';

@Module({
  imports: [LeagueModule, HttpModule, TeamDetailModule],
  controllers: [AppController, LeagueController, TeamDetailController],
  providers: [AppService, LeagueService, TeamDetailService],
})
export class AppModule {}
