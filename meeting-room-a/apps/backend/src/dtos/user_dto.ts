import { ObjectId } from "mongoose";
import { IImages, IPhoneNumber, IUserSchema } from "../models/user_model.js";
import StringFunction from "../utils/string_functions.js";

class UserDTO {
  _id: string;
  phoneNumber?: IPhoneNumber;
  avatar?: IImages;
  firstName: string;
  lastName?: string;
  customerId?: string;
  email: string;
  isEmailVerified: boolean;
  totalOrder: number;
  totalSpend: number;
  isAdmin: boolean;
  status: "Active" | "Blocked" | "Deleted";
  country: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUserSchema) {
    this._id = user._id.toString();
    this.phoneNumber = user.phoneNumber;
    this.avatar = user.avatar;
    this.firstName = StringFunction.capitalize(user.firstName);
    this.lastName =
      user.lastName ? StringFunction.capitalize(user.lastName) : undefined;
    this.customerId = user.customerId.split("-")[0]?.toUpperCase(); // Don't Remove split customerId.split("-")[0] for security
    this.email = user.email;
    this.isEmailVerified = user.isEmailVerified;
    this.totalOrder = user.totalOrder;
    this.totalSpend = user.totalSpend;
    this.isAdmin = user.isAdmin;
    this.status = user.status;
    this.country = user.country;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

export default UserDTO;
