import mongoose, { ObjectId } from "mongoose";
import { IImages } from "./user_model.js";
export interface IVendorSchema {
  _id: ObjectId;
  vendorName: string;
  description?: string;
  logo: IImages;
  status: "Active" | "Deactivated" | "Deleted";
  createdAt: Date;
  updatedAt: Date;
}

const vendorSchema = new mongoose.Schema<IVendorSchema>(
  {
    vendorName: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      minLength: 1,
      maxLength: 50,
    },
    logo: {
      type: {
        image: { type: String, required: true },
        blurHash: { type: String, required: true },
        etag: { type: String, required: true },
      },
      required: true,
      _id: false,
    },
    description: {
      type: String,
      trim: true,
      minLength: 50,
      maxLength: 200,
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

const VendorModel = mongoose.model<IVendorSchema>("vendors", vendorSchema);

export default VendorModel;
