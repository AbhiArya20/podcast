import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export interface RefreshType {
  _id: ObjectId;
  token: string[];
  userId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const refreshSchema = new Schema<RefreshType>(
  {
    token: { type: [String], required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Refresh", refreshSchema, "tokens");
