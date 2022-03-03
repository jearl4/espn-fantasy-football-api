import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueController } from './league/league.controller';
import { LeagueModule } from './league/league.module';
import { LeagueService } from './league/league.service';

@Module({
  imports: [LeagueModule, HttpModule],
  controllers: [AppController, LeagueController],
  providers: [AppService, LeagueService],
})
export class AppModule {}
