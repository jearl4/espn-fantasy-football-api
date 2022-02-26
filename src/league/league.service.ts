import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { League } from './league.dto';

@Injectable()
export class LeagueService {
  constructor(private httpService: HttpService) {}

  public getLeagueInfo(
    year: number,
    leagueId: number,
  ): Observable<AxiosResponse<League>> {
    const espnLeagueResponse = this.httpService.get(
      `http://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}?view=`,
    );
    const leagueInfo = this.formatESPNLeagueResponse(espnLeagueResponse);
    return leagueInfo;
  }

  private formatESPNLeagueResponse(
    espnRespone: Observable<AxiosResponse<League>>,
  ): League {
    throw new Error('Function not implemented.');
  }
}
