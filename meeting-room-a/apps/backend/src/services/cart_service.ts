import { FilterQuery, UpdateQuery } from "mongoose";
import CartModel, { ICartSchema } from "../models/cart_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";
import { IProductSchema } from "../models/product_model.js";
import { ProductSchemaPopulatedType } from "./product_service.js";

export type CartSchemaPopulatedType = Omit<ICartSchema, "product"> & {
  product: ProductSchemaPopulatedType;
};

class CartService {
  public static async find(
    query: FilterQuery<ICartSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await CartModel.find<CartSchemaPopulatedType>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<ICartSchema>) {
    const callback = async () =>
      await CartModel.findOne<CartSchemaPopulatedType>(query);
    return await RedisFunctions.get(RedisKeys.getCartKey(query._id), callback);
  }

  public static async create(data: ICartSchema) {
    const cart = new CartModel(data);
    const savedCart = (await cart.save()).toObject();
    return savedCart as unknown as CartSchemaPopulatedType;
  }

  public static async updateOne(
    query: FilterQuery<ICartSchema>,
    data: UpdateQuery<ICartSchema>
  ) {
    const callback = async () =>
      await CartModel.findOneAndUpdate<CartSchemaPopulatedType>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getCartKey(query._id),
      callback
    );
  }

  public static async getCount(query: FilterQuery<ICartSchema> = {}) {
    return await CartModel.find(query).countDocuments();
  }
}

export default CartService;
