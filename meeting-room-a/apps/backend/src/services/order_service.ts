import { FilterQuery, UpdateQuery } from "mongoose";
import OrderModel, {
  IOrderedProductsSchema,
  IOrderSchema,
} from "../models/order_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";
import { IProductSchema } from "../models/product_model.js";
import { IUserSchema } from "../models/user_model.js";
import { ProductSchemaPopulatedType } from "./product_service.js";

export type OrderedProductsSchemaPopulatedType = Omit<
  IOrderedProductsSchema,
  "product"
> & {
  product: ProductSchemaPopulatedType;
};

export type OrderSchemaPopulatedType = Omit<
  IOrderSchema,
  "user" | "products"
> & {
  user: IUserSchema;
  products: OrderedProductsSchemaPopulatedType[];
};

class OrderService {
  public static async find(
    query: FilterQuery<IOrderSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await OrderModel.find<OrderSchemaPopulatedType>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IOrderSchema>) {
    const callback = async () =>
      await OrderModel.findOne<OrderSchemaPopulatedType>(query);
    return await RedisFunctions.get(RedisKeys.getOrderKey(query._id), callback);
  }

  public static async create(data: IOrderSchema) {
    const order = new OrderModel(data);
    const savedOrder = (await order.save()).toObject();
    return savedOrder as unknown as OrderSchemaPopulatedType;
  }

  public static async updateOne(
    query: FilterQuery<IOrderSchema>,
    data: UpdateQuery<IOrderSchema>
  ) {
    const callback = async () =>
      await OrderModel.findOneAndUpdate<OrderSchemaPopulatedType>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getOrderKey(query._id),
      callback
    );
  }

  public static async getCount(query: FilterQuery<IOrderSchema> = {}) {
    return await OrderModel.find(query).countDocuments();
  }
}

export default OrderService;
