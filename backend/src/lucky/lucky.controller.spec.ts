import { Test, TestingModule } from '@nestjs/testing';
import { LuckyController } from './lucky.controller';
import { LuckyService } from './lucky.service';

describe('LuckyController', () => {
  let controller: LuckyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LuckyController],
      providers: [LuckyService],
    }).compile();

    controller = module.get<LuckyController>(LuckyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
