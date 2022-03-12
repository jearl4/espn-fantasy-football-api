import { Controller, Get } from '@nestjs/common';
import { League } from './league.dto';
import { LeagueService } from './league.service';

@Controller('league')
export class LeagueController {
  constructor(private leagueService: LeagueService) {}

  @Get()
  public getLeagueInfo(): League {
    const league: League = this.leagueService.getLeagueInfo(2021, 646859);
    return league;
  }
}
