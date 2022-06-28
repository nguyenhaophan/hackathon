import { Injectable, Req } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // async validateUser(@Req() req: any) {
  //   return req
  // }

  async validateTenant(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username)

    const checkPw = await bcrypt.compare(pass, user.password)

    if (user && checkPw) {
      return user
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id }

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    }
  }
}
