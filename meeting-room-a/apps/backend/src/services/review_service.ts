import { FilterQuery, UpdateQuery } from "mongoose";
import ReviewModel, { IReviewSchema } from "../models/review_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";
import { IUserSchema } from "../models/user_model.js";
import { ProductSchemaPopulatedType } from "./product_service.js";

export type ReviewSchemaPopulatedType = Omit<
  IReviewSchema,
  "user" | "product"
> & {
  user: IUserSchema;
  product: ProductSchemaPopulatedType;
};

class ReviewService {
  public static async find(
    query: FilterQuery<IReviewSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await ReviewModel.find<ReviewSchemaPopulatedType>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IReviewSchema>) {
    const callback = async () =>
      await ReviewModel.findOne<ReviewSchemaPopulatedType>(query);
    return await RedisFunctions.get(
      RedisKeys.getReviewKey(query._id),
      callback
    );
  }

  public static async create(data: IReviewSchema) {
    const review = new ReviewModel(data);
    const savedReview = (await review.save()).toObject();
    return savedReview as unknown as ReviewSchemaPopulatedType;
  }

  public static async updateOne(
    query: FilterQuery<IReviewSchema>,
    data: UpdateQuery<IReviewSchema>
  ) {
    const callback = async () =>
      await ReviewModel.findOneAndUpdate<ReviewSchemaPopulatedType>(
        query,
        data,
        {
          new: true,
        }
      );
    return await RedisFunctions.update(
      RedisKeys.getReviewKey(query._id),
      callback
    );
  }

  public static async getCount(query: FilterQuery<IReviewSchema> = {}) {
    return await ReviewModel.find(query).countDocuments();
  }
}

export default ReviewService;
