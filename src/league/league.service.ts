import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { League } from './league.dto';

@Injectable()
export class LeagueService {
  constructor(private httpService: HttpService) {}

  public league: League = {
    members: [
      {
        displayName: '',
        isLeagueManager: false,
      },
    ],
    seasonId: 0,
    settings: {
      name: '',
    },
    teams: [
      {
        abbrev: '',
        location: '',
        nickname: '',
      },
    ],
    status: {
      currentMatchupPeriod: 0,
    },
  };

  public getLeagueInfo(year: number, leagueId: number): League {
    const espnLeagueResponse = this.httpService
      .get<League>(
        `http://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}?view=`,
      )
      .subscribe({
        next: (response) => this.mapEspnResponseToLeague(response),
        error: (error) => console.log(error),
      });

    setTimeout(() => {
      espnLeagueResponse.unsubscribe();
    }, 5000);

    return this.league;
  }

  private mapEspnResponseToLeague(response: AxiosResponse<League, any>) {
    this.league.seasonId = response.data.seasonId;
    this.league.settings.name = response.data.settings.name;
    this.league.status.currentMatchupPeriod =
      response.data.status.currentMatchupPeriod;
    this.league.members = response.data.members;
    this.league.teams = response.data.teams;
  }
}
