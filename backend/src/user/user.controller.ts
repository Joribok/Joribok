import { Get, Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/login-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { id, password, nickname } = dto;
    await this.userService.createUser(id, password, nickname);
  }
  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<void> {
    const { id, password } = dto;
    await this.userService.login(id, password);
  }
}
