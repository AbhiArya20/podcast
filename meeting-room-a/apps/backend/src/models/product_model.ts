import mongoose, { ObjectId } from "mongoose";
import { IImages } from "./user_model.js";

export interface IVariants {
  key:
    | "Color"
    | "Size"
    | "Length"
    | "Diameter"
    | "Weight"
    | "Material"
    | "Power Rating"
    | "Range"
    | "Resistance"
    | "Voltage Rating"
    | "Current Rating"
    | "Protection"
    | "Conductivity"
    | "Connector"
    | "Pin Count"
    | "Mounting"
    | "Output"
    | "Speed"
    | "Signal"
    | "Efficiency"
    | "Backup Time"
    | "Power Supply"
    | "Temperature Range";
  value: string;
}

export interface IProductSchema {
  _id: ObjectId;
  vendor: ObjectId;
  productName: string;
  description?: string;
  categories: ObjectId[];
  collections: ObjectId[];
  inStock: boolean;
  sku: string;
  barcode: string;
  price: number;
  discountedPrice?: number;
  quantity: number;
  status: "Inactive" | "Scheduled" | "Published";
  tags: string[];
  GSTPercentage?: 0 | 5 | 12 | 18 | 28;
  productImages: IImages[];
  variants: IVariants[];
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProductSchema>(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendors",
      // required: true,
    },
    productName: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      minLength: 1,
      maxLength: 50,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      // minLength: 50,
      // maxLength: 200,
    },
    categories: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "categories",
        },
      ],
      default: [],
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    barcode: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    discountedPrice: {
      type: Number,
      min: 0,
      validate: {
        validator: function (value) {
          return value <= this.price;
        },
        message: "Discounted price must be less than the original price",
      },
    },
    quantity: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    GSTPercentage: {
      type: Number,
      enum: [0, 5, 12, 18, 28],
      default: 0,
    },
    collections: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "collections",
        },
      ],
      default: [],
    },
    variants: {
      type: [
        {
          key: {
            type: String,
            enum: [
              "Color",
              "Size",
              "Length",
              "Diameter",
              "Weight",
              "Material",
              "Power Rating",
              "Range",
              "Resistance",
              "Voltage Rating",
              "Current Rating",
              "Protection",
              "Conductivity",
              "Connector",
              "Pin Count",
              "Mounting",
              "Output",
              "Speed",
              "Signal",
              "Efficiency",
              "Backup Time",
              "Power Supply",
              "Temperature Range",
            ],
            required: true,
          },
          value: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 20,
          },
        },
      ],
      default: [],
    },
    tags: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["Inactive", "Scheduled", "Published"],
      default: "Inactive",
    },
    productImages: {
      type: [
        {
          type: {
            image: String,
            blurHash: String,
            etag: String,
          },
        },
      ],
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

productSchema.pre("find", function () {
  this.populate("vendor categories collections");
});

productSchema.post("save", function (doc, next) {
  doc.populate("vendor categories collections").then(function () {
    next();
  });
});

const ProductModel = mongoose.model<IProductSchema>("products", productSchema);

export default ProductModel;
