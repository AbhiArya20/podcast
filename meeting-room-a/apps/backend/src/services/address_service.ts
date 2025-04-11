import { UpdateQuery, FilterQuery } from "mongoose";
import AddressModel, { IAddressSchema } from "../models/address_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";

class AddressService {
  public static async find(
    query: FilterQuery<IAddressSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await AddressModel.find<IAddressSchema>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IAddressSchema>) {
    const callback = async () =>
      await AddressModel.findOne<IAddressSchema>(query);
    return await RedisFunctions.get(
      RedisKeys.getAddressKey(query._id),
      callback
    );
  }

  public static async create(data: IAddressSchema) {
    const address = new AddressModel(data);
    const savedAddress = (await address.save()).toObject();
    return savedAddress as unknown as IAddressSchema;
  }

  public static async updateOne(
    query: FilterQuery<IAddressSchema>,
    data: UpdateQuery<IAddressSchema>
  ) {
    const callback = async () =>
      await AddressModel.findOneAndUpdate<IAddressSchema>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getAddressKey(query._id),
      callback
    );
  }

  public static async updateMany(
    query: FilterQuery<IAddressSchema>,
    data: UpdateQuery<IAddressSchema>
  ) {
    return await AddressModel.updateMany(query, data, { new: true });
  }

  public static async getCount(query: FilterQuery<IAddressSchema> = {}) {
    return await AddressModel.countDocuments(query);
  }
}

export default AddressService;
