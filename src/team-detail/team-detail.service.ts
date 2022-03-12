import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { TeamDetailEspn } from './team-detail-espn.dto';
import { TeamDetail } from './team-detail.dto';

@Injectable()
export class TeamDetailService {
  constructor(private httpService: HttpService) {}

  public teamDetail: TeamDetailEspn = {
    teams: [
      {
        currentProjectedRank: 0,
        draftDayProjectedRank: 0,
        divisionId: 0,
        draftStrategy: { keeperPlayerIds: [] },
        logo: '',
        abbrev: '',
        id: 0,
        isActive: false,
        location: '',
        logoType: '',
        nickname: '',
        owners: [''],
        playoffSeed: 0,
        points: 0,
        pointsAdjusted: 0,
        pointsDelta: 0,
        primaryOwner: '',
        rankCalculatedFinal: 0,
        rankFinal: 0,
        record: {
          away: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          division: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          home: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
          overall: {
            gamesBack: 0,
            losses: 0,
            percentage: 0,
            pointsAgainst: 0,
            pointsFor: 0,
            streakLength: 0,
            streakType: '',
            ties: 0,
            wins: 0,
          },
        },
        tradeBlock: {},
        transactionCounter: {
          acquisitionBudgetSpent: 0,
          matchupAcquisitionTotalnumber: {},
          misc: 0,
          paid: 0,
          teamCharges: 0,
          acquisitions: 0,
          drops: 0,
          moveToActive: 0,
          moveToIR: 0,
          trades: 0,
        },
        valuesByStat: {},
        waiverRank: 0,
      },
    ],
  };

  public getTeamDetail(year: number, leagueId: number): TeamDetailEspn {
    const espnResponse = this.httpService
      .get<TeamDetailEspn>(
        `http://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}?view=mTeam`,
      )
      .subscribe({
        next: (response) => (this.teamDetail = response.data),
        error: (error) => console.log(error),
      });

    setTimeout(() => {
      espnResponse.unsubscribe();
    }, 5000);

    return this.teamDetail;
    
  }
}
