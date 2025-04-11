import mongoose, { ObjectId, UpdateQuery } from "mongoose";
import bcrypt from "bcrypt";
import Constants from "../utils/constants.js";

export interface IImages {
  image: string;
  blurHash: string;
  etag: string;
}

export interface IPhoneNumber {
  countryCode: string;
  number: string;
}

export interface IUserSchema {
  _id: ObjectId;
  phoneNumber?: IPhoneNumber;
  avatar?: IImages;
  firstName: string;
  lastName?: string;
  customerId: string;
  email: string;
  password: string;
  totalOrder: number;
  isEmailVerified: boolean;
  totalSpend: number;
  isAdmin: boolean;
  status: "Active" | "Blocked" | "Deleted";
  country: string;
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

const userSchema = new mongoose.Schema<IUserSchema>(
  {
    phoneNumber: phoneNumberSchema,
    avatar: {
      type: {
        image: { type: String, required: true },
        blurHash: { type: String, required: true },
        etag: { type: String, required: true },
      },
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
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      minLength: 3,
      maxLength: 50,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    totalOrder: {
      type: Number,
      default: 0,
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Blocked", "Deleted"],
    },
    country: {
      type: String,
      enum: Constants.COUNTRIES,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const user = this;
  const update = user.getUpdate() as UpdateQuery<IUserSchema>;
  if (update && update.$set && update.$set.password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(update.$set.password, salt);
    update.$set.password = hash;
  }
  next();
});

const UserModel = mongoose.model<IUserSchema>("users", userSchema);

export default UserModel;
