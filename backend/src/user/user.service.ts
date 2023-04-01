import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import User from './entities/user.entity';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
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

  async login(userId: string, password: string) {
    // 1. 해당 id의 사용자를 DB에서 찾기
    const user = await this.usersRepository.findOne({ where: { userId } });

    // 1.1. 없으면 에러 반환
    if (!user) {
      throw new HttpException('로그인에 실패하였습니다.', HttpStatus.BAD_REQUEST);
    }

    // 2. password가 맞는지 확인
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    // 2.1. 틀리면 에러 반환
    if (!isPasswordMatching) {
      throw new HttpException('로그인에 실패하였습니다.', HttpStatus.BAD_REQUEST);
    }

    // 3. 맞으면 JWT 발급
    const accessToken = await this.generateAccessToken(user);

    return {
      id: user.userId,
      nickname: user.nickname,
      accessToken,
    };
  }

  private async generateAccessToken(user: User): Promise<string> {
    return this.jwtService.sign(Object.assign({}, user));
  }

  // 인증 확인
  async validateToken(authHeader: string): Promise<User> {
    if (!authHeader.startsWith('Bearer ')) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const token = authHeader.substring(7);
    let decodedToken;

    try {
      decodedToken = this.jwtService.verify(token);
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const user = await this.usersRepository.findOne({ where: { userId: decodedToken.userId } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findById(userId: string) {
    const userById = await this.usersRepository.findOne({ where: { userId } });

    return userById;
  }
}
