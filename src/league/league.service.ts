import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { League } from './league.dto';

@Injectable()
export class LeagueService {
  constructor(private httpService: HttpService) {}

  public getLeagueInfo(year: number, leagueId: number): League {
    const espnLeagueResponse = this.httpService.get(
      `http://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}?view=`,
    );
    const leagueInfo: League =
      this.formatESPNLeagueResponse(espnLeagueResponse);
    return leagueInfo;
  }

  private formatESPNLeagueResponse(
    espnResponse: Observable<AxiosResponse<League>>,
  ): League {
      let formattedESPNResponse: League;
      return formattedESPNResponse;
  }
}
