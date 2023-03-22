import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import User from './entities/user.entity';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser({ userId, password, nickname }: CreateUserDto) {
    // 유효성 검사
    // userId: 2~19자, 영문자+숫자 조합
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,19}$/.test(userId)) {
      throw new HttpException('입력값을 다시 확인해주세요.', HttpStatus.BAD_REQUEST);
    }
    // password: 8~19자, !@#$%^&*()+영문자+숫자
    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])(?!.*\s).{8,19}$/.test(password)) {
      throw new HttpException('입력값을 다시 확인해주세요.', HttpStatus.BAD_REQUEST);
    }
    // nickname: 1~19자
    if (nickname.length < 1 || nickname.length > 19) {
      throw new HttpException('입력값을 다시 확인해주세요.', HttpStatus.BAD_REQUEST);
    }

    const userById = await this.usersRepository.findOne({ where: { userId } });
    const userByNickname = await this.usersRepository.findOne({ where: { nickname } });

    // 이미 존재하는 아이디일 경우
    if (userById) {
      throw new HttpException(
        '이미 존재하는 아이디입니다. 다시 입력해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 이미 존재하는 닉네임일 경우
    if (userByNickname) {
      throw new HttpException(
        '이미 존재하는 닉네임입니다. 다시 입력해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 사용자 생성
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersRepository.create({
      userId,
      password: hashedPassword,
      nickname,
    });
    await this.usersRepository.save(newUser);

    return newUser;
  }

  async login(id: string, password: string): Promise<string> {
    // 1. DB에서 찾기
    // 2. DB에 있으면 JWT 발급
    console.log('login', id, password);
    throw new Error('회원가입을 해주세요');
  }
}
