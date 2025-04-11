import { UpdateQuery, FilterQuery } from "mongoose";
import ProductModel, { IProductSchema } from "../models/product_model.js";
import RedisFunctions from "../utils/redis/redis_function.js";
import RedisKeys from "../utils/redis/redis_keys.js";
import { IVendorSchema } from "../models/vendor_model.js";
import { ICategorySchema } from "../models/category_model.js";
import { ICollectionSchema } from "../models/collection_model.js";

export type ProductSchemaPopulatedType = Omit<
  IProductSchema,
  "vendor" | "categories" | "collections"
> & {
  vendor: IVendorSchema;
  categories: ICategorySchema[];
  collections: ICollectionSchema[];
};

class ProductService {
  public static async find(
    query: FilterQuery<IProductSchema> = {},
    sort: Record<string, 1 | -1> = { createdAt: -1 },
    skip: number = 0,
    limit: number = 20
  ) {
    return await ProductModel.find<ProductSchemaPopulatedType>(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  public static async findOne(query: FilterQuery<IProductSchema>) {
    const callback = async () =>
      await ProductModel.findOne<ProductSchemaPopulatedType>(query);
    return await RedisFunctions.get(
      RedisKeys.getProductKey(query._id),
      callback
    );
  }

  public static async create(data: IProductSchema) {
    const product = new ProductModel(data);
    const savedProduct = (await product.save()).toObject();
    return savedProduct as unknown as ProductSchemaPopulatedType;
  }

  public static async updateOne(
    query: FilterQuery<IProductSchema>,
    data: UpdateQuery<IProductSchema>
  ) {
    const callback = async () =>
      await ProductModel.findOneAndUpdate<ProductSchemaPopulatedType>(
        query,
        data,
        { new: true }
      );
    return await RedisFunctions.update(
      RedisKeys.getProductKey(query._id),
      callback
    );
  }

  public static async updateMany(
    query: FilterQuery<IProductSchema>,
    data: UpdateQuery<IProductSchema>
  ) {
    return await ProductModel.updateMany(query, data, { new: true });
  }

  public static async getCount(query: FilterQuery<IProductSchema> = {}) {
    return await ProductModel.countDocuments(query);
  }
}

export default ProductService;
