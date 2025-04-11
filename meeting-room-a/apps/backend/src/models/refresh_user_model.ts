import mongoose, { ObjectId } from "mongoose";

export interface IRefreshUserSchema {
  _id: ObjectId;
  token: string[];
  userId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const refreshUserSchema = new mongoose.Schema<IRefreshUserSchema>(
  {
    token: {
      type: [String],
      required: true,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const RefreshUserModel = mongoose.model<IRefreshUserSchema>(
  "refresh_users",
  refreshUserSchema
);

export default RefreshUserModel;
