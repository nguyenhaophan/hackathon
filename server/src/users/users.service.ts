import { ConflictException, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { RegisterUserDto } from './dto/register-user.dto'

@Injectable()
export class UsersService {
  async registerUser(registerUserDto: RegisterUserDto): Promise<UserDocument> {
    const existedUser = await this.userModel.findOne({
      username: registerUserDto.username,
    })

    if (existedUser) {
      throw new ConflictException('Username existed')
    }

    // if (registerUserDto.email) {
    //   const existedEmail = await this.userModel.findOne({
    //     email: registerUserDto.email,
    //   })

    //   if (existedEmail) {
    //     throw new ConflictException('Email existed')
    //   }
    // }

    // Hasing password with bcrypt
    const salt = await bcrypt.genSalt(10)
    registerUserDto.password = await bcrypt.hash(registerUserDto.password, salt)

    return await this.userModel.create(registerUserDto)
  }

  async deleteUser(userId: string) {
    const foundUser = await this.userModel.findByIdAndDelete(userId)

    if (!foundUser) {
      throw new NotFoundException('User not found')
    }

    return 'User deleted successfully'
  }
}
