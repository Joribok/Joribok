import { Controller, Get } from '@nestjs/common';
import { LuckyService } from './lucky.service';

@Controller('lucky')
export class LuckyController {
  constructor(private readonly luckyService: LuckyService) {}

  @Get()
  getLucky() {
    return this.luckyService.getLucky();
  }
}
