import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

import { UserDocument } from './user.schema'
import { RegisterUserDto } from './dto/register-user.dto'
import { PinLocationDto } from './dto/pin-location.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async getAll(): Promise<UserDocument[]> {
    return await this.userModel.find()
  }

  async findOne(username: string): Promise<UserDocument | undefined> {
    const foundUser = await this.userModel.findOne({ username: username })

    if (!foundUser) {
      throw new UnauthorizedException('Invalid username')
    }

    return foundUser
  }

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

  async findById(id: string): Promise<UserDocument | undefined> {
    return await this.userModel.findById(id)
  }

  async pinLoc(userId: string, pinLocationDto: PinLocationDto) {
    const updatingUser = await this.userModel.findById(userId)

    if (!updatingUser) {
      throw new NotFoundException('User not found')
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(userId, {
      $set: {
        pinnedLocation: {
          latitude: pinLocationDto.latitude,
          longtitude: pinLocationDto.longtitude,
        },
      },
    })

    return updatedUser
  }
}
