import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  async createUser(id: string, password: string, nickname: string) {
    // 유효성 검사
    // accessToken 발급
    await this.saveUser(id, password, nickname);
  }

  private saveUser(id: string, password: string, nickname: string) {
    // DB연결하고 해야죠
    console.log('savedUser', id, nickname, password);
  }

  async login(id: string, password: string): Promise<string> {
    // 1. DB에서 찾기
    // 2. DB에 있으면 JWT 발급
    console.log('login', id, password);
    throw new Error('회원가입을 해주세요');
  }
}
