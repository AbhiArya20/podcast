import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

export interface RoomType {
  _id: Types.ObjectId;
  topic: string;
  roomType: string;
  owner: Types.ObjectId;
  participants: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema = new Schema<RoomType>(
  {
    topic: { type: String, required: true },
    roomType: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    participants: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Room", roomSchema, "rooms");
