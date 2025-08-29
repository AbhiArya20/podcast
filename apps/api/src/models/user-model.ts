import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export interface UserType {
  _id: ObjectId;
  name: string;
  email: string;
  avatar: string;
  activated: boolean;
  googleId: string;
  facebookId: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    avatar: { type: String },
    activated: { type: Boolean, default: false },
    googleId: { type: String },
    facebookId: { type: String },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  },
);

export default mongoose.model("User", userSchema, "users");
