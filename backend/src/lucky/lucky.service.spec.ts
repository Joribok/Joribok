import { Test, TestingModule } from '@nestjs/testing';
import { LuckyService } from './lucky.service';

describe('LuckyService', () => {
  let service: LuckyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LuckyService],
    }).compile();

    service = module.get<LuckyService>(LuckyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
