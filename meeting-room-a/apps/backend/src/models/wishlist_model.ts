import mongoose, { ObjectId } from "mongoose";

export interface IWishlistSchema {
  _id: ObjectId;
  user: ObjectId;
  product: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const wishlistSchema = new mongoose.Schema<IWishlistSchema>(
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
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

wishlistSchema.pre("find", function () {
  this.populate("product");
});
wishlistSchema.post("save", function (doc, next) {
  doc.populate("product").then(function () {
    next();
  });
});

const WishlistModel = mongoose.model<IWishlistSchema>(
  "wishlists",
  wishlistSchema
);

export default WishlistModel;
