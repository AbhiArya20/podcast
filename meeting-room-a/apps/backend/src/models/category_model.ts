import mongoose, { ObjectId } from "mongoose";

export interface ICategorySchema {
  _id: ObjectId;
  title: string;
  description?: string;
  icon: string;
  iconColor: string;
  totalProducts: number;
  totalRevenue: number;
  status: "Active" | "Deactivated" | "Deleted";
  createdAt: Date;
  updatedAt: Date;
}

const categorySchema = new mongoose.Schema<ICategorySchema>(
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
    totalProducts: {
      type: Number,
      default: 0,
    },
    totalRevenue: {
      type: Number,
      default: 0,
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

const CategoryModel = mongoose.model<ICategorySchema>(
  "categories",
  categorySchema
);

export default CategoryModel;
