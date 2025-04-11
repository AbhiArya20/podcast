import { FilterQuery, UpdateQuery } from "mongoose";
import WishlistModel, { IWishlistSchema } from "../models/wishlist_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";
import { IProductSchema } from "../models/product_model.js";
import { ProductSchemaPopulatedType } from "./product_service.js";

export type WishlistSchemaPopulatedType = Omit<IWishlistSchema, "product"> & {
  product: ProductSchemaPopulatedType;
};

class WishListService {
  public static async find(
    query: FilterQuery<IWishlistSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await WishlistModel.find<WishlistSchemaPopulatedType>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IWishlistSchema>) {
    const callback = async () =>
      await WishlistModel.findOne<WishlistSchemaPopulatedType>(query);
    return await RedisFunctions.get(
      RedisKeys.getWishlistKey(query._id),
      callback
    );
  }

  public static async create(data: IWishlistSchema) {
    const wishlist = new WishlistModel(data);
    const savedWishlist = (await wishlist.save()).toObject();
    return savedWishlist as unknown as WishlistSchemaPopulatedType;
  }

  public static async updateOne(
    query: FilterQuery<IWishlistSchema>,
    data: UpdateQuery<IWishlistSchema>
  ) {
    const callback = async () =>
      await WishlistModel.findOneAndUpdate<WishlistSchemaPopulatedType>(
        query,
        data,
        {
          new: true,
        }
      );
    return await RedisFunctions.update(
      RedisKeys.getWishlistKey(query._id),
      callback
    );
  }

  public static async getCount(query: FilterQuery<IWishlistSchema> = {}) {
    return await WishlistModel.find(query).countDocuments();
  }
}

export default WishListService;
