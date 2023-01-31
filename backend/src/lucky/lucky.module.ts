import { Module } from '@nestjs/common';
import { LuckyService } from './lucky.service';
import { LuckyController } from './lucky.controller';

@Module({
  controllers: [LuckyController],
  providers: [LuckyService]
})
export class LuckyModule {}
