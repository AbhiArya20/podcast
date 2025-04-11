import mongoose, { ObjectId } from "mongoose";
import { addressSchema, IAddressSchema } from "./address_model.js";

export interface IOrderedProductsSchema {
  product: ObjectId;
  quantity: number;
  price: number;
  discountedPrice: number;
  GSTPercentage: number;
  actualPayment: number;
}

const productSchema = new mongoose.Schema<IOrderedProductsSchema>({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discountedPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  GSTPercentage: {
    type: Number,
    required: true,
    min: 0,
  },
  actualPayment: {
    type: Number,
    required: true,
    min: 0,
  },
});

productSchema.pre("find", function () {
  this.populate("product");
});
productSchema.post("save", function (doc, next) {
  doc.populate("product").then(function () {
    next();
  });
});

export interface IOrderSchema {
  _id: ObjectId;
  orderId: string;
  user: ObjectId;
  status:
    | "Pending"
    | "Ordered"
    | "Ready to Pickup"
    | "Delivered"
    | "Out for Delivery"
    | "Dispatched"
    | "Cancelled"
    | "Failed";
  paymentStatus: "Cancelled" | "Failed" | "Paid" | "Pending";
  totalPrice: number;
  address: IAddressSchema;
  products: IOrderedProductsSchema[];
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema<IOrderSchema>(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Ordered",
        "Ready to Pickup",
        "Delivered",
        "Out for Delivery",
        "Dispatched",
        "Cancelled",
        "Failed",
      ],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Cancelled", "Failed", "Paid", "Pending"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    address: addressSchema,
    products: {
      type: [productSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

// orderSchema.pre("find", function () {
//   this.populate(["user", "products.product"]);
// });

// orderSchema.post("save", function (doc, next) {
//   doc.populate(["user", "products.product"]).then(function () {
//     next();
//   });
// });

const OrderModel = mongoose.model<IOrderSchema>("orders", orderSchema);

export default OrderModel;
