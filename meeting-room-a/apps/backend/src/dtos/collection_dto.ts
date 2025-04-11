import { ObjectId } from "mongoose";
import { ICollectionSchema } from "../models/collection_model.js";
import StringFunction from "../utils/string_functions.js";

class CollectionDTO {
  _id: string;
  title: string;
  description?: string;
  icon: string;
  iconColor: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(collection: ICollectionSchema) {
    this._id = collection._id.toString();
    this.title = StringFunction.capitalize(collection.title);
    this.description = collection.description;
    this.icon = collection.icon;
    this.iconColor = collection.iconColor;
    this.createdAt = collection.createdAt;
    this.updatedAt = collection.updatedAt;
  }
}

export default CollectionDTO;
