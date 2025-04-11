import mongoose, { ObjectId } from "mongoose";

export interface ICartSchema {
  _id: string;
  user: ObjectId;
  product: ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const cartSchema = new mongoose.Schema<ICartSchema>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: { type: Number, min: 1, required: true },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

cartSchema.pre("find", function () {
  this.populate("product");
});

cartSchema.post("save", function (doc, next) {
  doc.populate("product").then(function () {
    next();
  });
});

const CartModel = mongoose.model<ICartSchema>("carts", cartSchema);

export default CartModel;
