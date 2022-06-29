import { Type } from 'class-transformer'
import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator'

// class Location {
//   @IsNumber()
//   longtitude: number

//   @IsNumber()
//   latitude: number
// }

// export class PinLocationDto {
//   @Type(() => Location)
//   @ValidateNested()
//   pinnedLocation: Location
// }

export class PinLocationDto {
  @IsNumber()
  longtitude: number

  @IsNumber()
  latitude: number
}
