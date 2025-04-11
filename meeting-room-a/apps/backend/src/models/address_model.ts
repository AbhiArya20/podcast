import mongoose, { ObjectId } from "mongoose";
import { IPhoneNumber } from "./user_model.js";
import Constants from "../utils/constants.js";

// Main address schema
export interface IAddressSchema {
  _id: ObjectId;
  addressType: "Home" | "Work";
  firstName: string;
  lastName?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  landmark?: string;
  phoneNumber: IPhoneNumber;
  user: ObjectId;
  status: "Active" | "Default" | "Deleted";
  createdAt: Date;
  updatedAt: Date;
}

const phoneNumberSchema = new mongoose.Schema(
  {
    countryCode: {
      type: String,
      enum: Constants.COUNTRY_CODES,
      required: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

export const addressSchema = new mongoose.Schema<IAddressSchema>(
  {
    addressType: {
      type: String,
      enum: ["Home", "Work"],
      required: true,
    },
    firstName: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true,
      minLength: 3,
      maxLength: 30,
    },
    address: {
      type: String,
      trim: true,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    city: {
      type: String,
      required: true,
      enum: Constants.CITIES,
    },
    state: {
      type: String,
      required: true,
      enum: Constants.STATES,
    },
    country: {
      type: String,
      required: true,
      enum: Constants.COUNTRIES,
    },
    pinCode: {
      type: String,
      required: true,
      match: /^[A-Z0-9]+$/i,
    },
    landmark: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
    },
    phoneNumber: {
      type: phoneNumberSchema,
      required: true,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Deleted", "Default"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const AddressModel = mongoose.model<IAddressSchema>("addresses", addressSchema);

export default AddressModel;
