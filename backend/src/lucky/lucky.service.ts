import { Injectable } from '@nestjs/common';

@Injectable()
export class LuckyService {
  getLucky() {
    // accessToken 유효성 검사하고
    // DB조회해서 알맞은 Lucky 반환하기
    return {
      fortune: 'hi',
      thing: 'hi',
      color: 'hi',
    };
  }
}
