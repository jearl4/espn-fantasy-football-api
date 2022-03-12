import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TeamDetailService } from './team-detail.service';

@Module({
  imports: [HttpModule],
  providers: [TeamDetailService]
})
export class TeamDetailModule {}
