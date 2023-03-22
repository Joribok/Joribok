import { Controller, Body, Post } from '@nestjs/common';

import CreateUserDto from './dto/create-user.dto';
import UserLoginDto from './dto/login-user.dto';
import UserService from './user.service';

@Controller()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    await this.userService.createUser(dto);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<void> {
    const { userId, password } = dto;

    await this.userService.login(userId, password);
  }
}
