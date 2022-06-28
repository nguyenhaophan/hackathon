import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'

import { AuthService } from 'src/auth/auth.service'
import { GoogleAuthGuard } from 'src/auth/google-strategy/google-auth.guard'
import { RegisterUserDto } from './dto/register-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @UseGuards(GoogleAuthGuard)
  // @Get('google-login')
  // googleLogin(@Req() req: any) {
  //   return this.authService.validateUser(req)
  // }

  @Get('greeting')
  greet() {
    return { message: 'hello' }
  }

  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    const registerdUser = await this.usersService.registerUser(registerUserDto)
    return this.authService.login(registerdUser)
  }
}
