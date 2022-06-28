import { IsNotEmpty, Length } from 'class-validator'

export class RegisterUserDto {
  @IsNotEmpty()
  @Length(4)
  username: string

  @IsNotEmpty()
  password: string
}
