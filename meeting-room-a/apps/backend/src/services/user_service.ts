import { FilterQuery, UpdateQuery } from "mongoose";
import UserModel, { IUserSchema } from "../models/user_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";

class UserService {
  public static async find(
    query: FilterQuery<IUserSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await UserModel.find<IUserSchema>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IUserSchema>) {
    const callback = async () => await UserModel.findOne<IUserSchema>(query);
    return await RedisFunctions.get(
      RedisKeys.getUserKey(query._id?.toString()),
      callback
    );
  }

  public static async findOneWithEmail(query: { email: string }) {
    return await UserModel.findOne<IUserSchema>(query);
  }

  public static async create(
    data: Pick<
      IUserSchema,
      "email" | "password" | "firstName" | "lastName" | "customerId"
    >
  ) {
    const user = new UserModel(data);
    const savedUser = (await user.save()).toObject();
    return savedUser as unknown as IUserSchema;
  }

  public static async updateOne(
    query: FilterQuery<IUserSchema>,
    data: UpdateQuery<IUserSchema>
  ) {
    const callback = async () =>
      await UserModel.findOneAndUpdate<IUserSchema>(query, data, { new: true });
    return await RedisFunctions.update(
      RedisKeys.getUserKey(query._id?.toString()),
      callback
    );
  }

  public static async getCount(query: FilterQuery<IUserSchema> = {}) {
    return await UserModel.find(query).countDocuments();
  }
}

export default UserService;
