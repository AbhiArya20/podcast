import { ObjectId } from "mongoose";
import { ICategorySchema } from "../models/category_model.js";
import StringFunction from "../utils/string_functions.js";

class CategoryDTO {
  _id: string;
  title: string;
  description?: string;
  icon: string;
  iconColor: string;
  totalProducts: number;
  totalRevenue: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(category: ICategorySchema) {
    this._id = category._id.toString();
    this.title = StringFunction.capitalize(category.title);
    this.description = category.description;
    this.icon = category.icon;
    this.iconColor = category.iconColor;
    this.totalProducts = category.totalProducts;
    this.totalRevenue = category.totalRevenue;
    this.createdAt = category.createdAt;
    this.updatedAt = category.updatedAt;
  }
}

export default CategoryDTO;
