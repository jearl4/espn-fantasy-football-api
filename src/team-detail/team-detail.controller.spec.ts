import { Test, TestingModule } from '@nestjs/testing';
import { TeamDetailController } from './team-detail.controller';

describe('TeamDetailsController', () => {
  let controller: TeamDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamDetailController],
    }).compile();

    controller = module.get<TeamDetailController>(TeamDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
