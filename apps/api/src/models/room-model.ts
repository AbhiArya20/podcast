import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export interface RoomType {
  _id: ObjectId;
  topic: string;
  roomType: string;
  owner: ObjectId;
  participants: ObjectId[];
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
