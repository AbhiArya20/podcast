import { FilterQuery, UpdateQuery } from "mongoose";
import CategoryModel, { ICategorySchema } from "../models/category_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";

class CategoryService {
  public static async find(
    query: FilterQuery<ICategorySchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await CategoryModel.find<ICategorySchema>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<ICategorySchema>) {
    const callback = async () =>
      await CategoryModel.findOne<ICategorySchema>(query);
    return await RedisFunctions.get(
      RedisKeys.getCategoryKey(query._id?.toString()),
      callback
    );
  }

  public static async create(data: ICategorySchema) {
    const category = new CategoryModel(data);
    const savedCategory = (await category.save()).toObject();
    return savedCategory as unknown as ICategorySchema;
  }

  public static async updateOne(
    query: FilterQuery<ICategorySchema>,
    data: UpdateQuery<ICategorySchema>
  ) {
    const callback = async () =>
      await CategoryModel.findOneAndUpdate<ICategorySchema>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getCategoryKey(query._id?.toString()),
      callback
    );
  }

  public static async getCount(query: FilterQuery<ICategorySchema>) {
    return await CategoryModel.find(query).countDocuments();
  }
}

export default CategoryService;
