import { Controller, Get } from '@nestjs/common';
import { League } from './league.dto';

@Controller('league')
export class LeagueController {
    @Get()
    public getLeagueInfo(): League{
        
        return 
    }
}
