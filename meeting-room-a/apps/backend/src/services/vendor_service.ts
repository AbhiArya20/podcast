import { FilterQuery, UpdateQuery } from "mongoose";
import VendorModel, { IVendorSchema } from "../models/vendor_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";

class VendorService {
  public static async find(
    query: FilterQuery<IVendorSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await VendorModel.find<IVendorSchema>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IVendorSchema>) {
    const callback = async () =>
      await VendorModel.findOne<IVendorSchema>(query);
    return await RedisFunctions.get(
      RedisKeys.getVendorKey(query._id?.toString()),
      callback
    );
  }

  public static async create(data: IVendorSchema) {
    const vendor = new VendorModel(data);
    const savedVendor = (await vendor.save()).toObject();
    return savedVendor as unknown as IVendorSchema;
  }

  public static async updateOne(
    query: FilterQuery<IVendorSchema>,
    data: UpdateQuery<IVendorSchema>
  ) {
    const callback = async () =>
      await VendorModel.findOneAndUpdate<IVendorSchema>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getVendorKey(query._id?.toString()),
      callback
    );
  }

  public static async getCount(query: FilterQuery<IVendorSchema>) {
    return await VendorModel.find(query).countDocuments();
  }
}

export default VendorService;
