import mongoose, {  Types } from "mongoose";
const Schema = mongoose.Schema;

export interface UserType {
  _id: Types.ObjectId;
  name?: string | null;
  email: string;
  avatar?: string | null;
  activated: boolean;
  googleId?: string | null;
  facebookId?: string | null;
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
