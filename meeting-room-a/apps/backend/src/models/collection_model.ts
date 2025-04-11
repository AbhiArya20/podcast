import mongoose, { ObjectId } from "mongoose";

export interface ICollectionSchema {
  _id: ObjectId;
  title: string;
  description?: string;
  icon: string;
  iconColor: string;
  status: "Active" | "Deactivated" | "Deleted";
  createdAt: Date;
  updatedAt: Date;
}

const collectionSchema = new mongoose.Schema<ICollectionSchema>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      minLength: 3,
      maxLength: 15,
    },
    description: {
      type: String,
      trim: true,
      minLength: 50,
      maxLength: 200,
    },
    icon: {
      type: String,
      trim: true,
      required: true,
    },
    iconColor: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Deactivated", "Deleted"],
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const CollectionModel = mongoose.model<ICollectionSchema>(
  "collections",
  collectionSchema
);

export default CollectionModel;
