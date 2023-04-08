import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

import User from 'src/user/entities/user.entity';

@Injectable()
export default class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async generateAccessToken(user: User): Promise<string> {
    return this.jwtService.sign(Object.assign({}, user));
  }

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
}
