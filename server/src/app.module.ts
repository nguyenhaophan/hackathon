import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/hackathon'),
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    UsersModule,
  ],
})
export class AppModule {}
