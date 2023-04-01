import { Controller, Body, Post, Headers, Res, HttpStatus, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import CreateUserDto from './dto/create-user.dto';
import UserLoginDto from './dto/login-user.dto';
import User from './entities/user.entity';
import UserService from './user.service';

@Controller()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.userService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto, @Res() res): Promise<void> {
    const { id, password } = dto;

    const user = await this.userService.login(id, password);

    res.status(HttpStatus.OK).send(user);
  }

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Headers('authorization') authHeader: string): Promise<User> {
    return this.userService.validateToken(authHeader);
  }
}
