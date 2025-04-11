import mongoose, { ObjectId } from "mongoose";

export interface IReviewSchema {
  _id: ObjectId;
  user: ObjectId;
  product: ObjectId;
  stars: number;
  title: string;
  description: string;
  status: "Published" | "Private" | "Deleted";
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new mongoose.Schema<IReviewSchema>(
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
    stars: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    title: { type: String, required: true, minLength: 1, maxLength: 200 },
    description: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 200,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

reviewSchema.pre("find", function () {
  this.populate("user product");
});
reviewSchema.post("save", function (doc, next) {
  doc.populate("user product").then(function () {
    next();
  });
});

const ReviewModel = mongoose.model<IReviewSchema>("reviews", reviewSchema);

export default ReviewModel;
