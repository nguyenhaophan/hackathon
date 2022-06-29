import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  username: string
  password: string
  pinnedLocation: {
    latitude: number
    longtitude: number
  }
}

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pinnedLocation: { latitude: Number, longtitude: Number },
})
