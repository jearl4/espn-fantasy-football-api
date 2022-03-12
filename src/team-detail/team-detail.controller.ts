import { Controller, Get } from '@nestjs/common';
import { TeamDetailEspn } from './team-detail-espn.dto';
import { TeamDetailService } from './team-detail.service';

@Controller('team-detail')
export class TeamDetailController {
  constructor(private readonly teamDetailService: TeamDetailService) {}

  @Get()
  public getTeamDetail(): TeamDetailEspn {
    const teamDetail: TeamDetailEspn = this.teamDetailService.getTeamDetail(
      2021,
      646859,
    );
    return teamDetail;
  }
}
