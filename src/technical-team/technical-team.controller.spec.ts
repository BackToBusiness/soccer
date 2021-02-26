import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalTeamController } from './technical-team.controller';

describe('TechnicalTeamController', () => {
  let controller: TechnicalTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalTeamController],
    }).compile();

    controller = module.get<TechnicalTeamController>(TechnicalTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
