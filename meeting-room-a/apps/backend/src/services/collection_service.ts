import { FilterQuery, UpdateQuery } from "mongoose";
import CollectionModel, {
  ICollectionSchema,
} from "../models/collection_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";

class CollectionService {
  public static async find(
    query: FilterQuery<ICollectionSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await CollectionModel.find<ICollectionSchema>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<ICollectionSchema>) {
    const callback = async () =>
      await CollectionModel.findOne<ICollectionSchema>(query);
    return await RedisFunctions.get(
      RedisKeys.getCollectionKey(query._id?.toString()),
      callback
    );
  }

  public static async create(data: ICollectionSchema) {
    const collection = new CollectionModel(data);
    const savedCollection = (await collection.save()).toObject();
    return savedCollection as unknown as ICollectionSchema;
  }

  public static async updateOne(
    query: FilterQuery<ICollectionSchema>,
    data: UpdateQuery<ICollectionSchema>
  ) {
    const callback = async () =>
      await CollectionModel.findOneAndUpdate<ICollectionSchema>(query, data, {
        new: true,
      });
    return await RedisFunctions.update(
      RedisKeys.getCollectionKey(query._id?.toString()),
      callback
    );
  }

  public static async getCount(query: FilterQuery<ICollectionSchema>) {
    return await CollectionModel.find(query).countDocuments();
  }
}

export default CollectionService;
