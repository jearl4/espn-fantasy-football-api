import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueController } from './league/league.controller';
import { LeagueModule } from './league/league.module';

@Module({
  imports: [LeagueModule],
  controllers: [AppController, LeagueController],
  providers: [AppService],
})
export class AppModule {}
