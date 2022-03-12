import { Test, TestingModule } from '@nestjs/testing';
import { TeamDetailService } from './team-detail.service';

describe('TeamDetailsService', () => {
  let service: TeamDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamDetailService],
    }).compile();

    service = module.get<TeamDetailService>(TeamDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
