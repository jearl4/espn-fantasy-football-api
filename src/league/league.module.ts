import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';

@Module({
    imports: [HttpModule],
    providers: [LeagueService]
})
export class LeagueModule {}
