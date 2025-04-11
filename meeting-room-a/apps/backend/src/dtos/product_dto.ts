import { IVariants } from "../models/product_model.js";
import CategoryDTO from "./category_dto.js";
import CollectionDTO from "./collection_dto.js";
import { IVendorSchema } from "../models/vendor_model.js";
import VendorDTO from "./vendor_dto.js";
import { ProductSchemaPopulatedType } from "../services/product_service.js";
import { IImages } from "../models/user_model.js";
import StringFunction from "../utils/string_functions.js";

class ProductDTO {
  _id: string;
  vendor: VendorDTO;
  productName: string;
  description?: string;
  categories: CategoryDTO[];
  collections: CollectionDTO[];
  inStock: boolean;
  sku: string;
  barcode: string;
  price: number;
  discountedPrice?: number;
  quantity: number;
  status: "Inactive" | "Scheduled" | "Published";
  tags: string[];
  GSTPercentage?: 0 | 5 | 12 | 18 | 28;
  productImages: IImages[];
  variants: IVariants[];
  createdAt: Date;
  updatedAt: Date;

  constructor(product: ProductSchemaPopulatedType) {
    this._id = product._id.toString();
    this.vendor = new VendorDTO(product.vendor);
    this.productName = StringFunction.capitalize(product.productName);
    this.description = product.description;
    this.categories = product.categories.map((item) => new CategoryDTO(item));
    this.collections = product.collections.map(
      (item) => new CollectionDTO(item)
    );
    this.inStock = product.inStock;
    this.sku = product.sku;
    this.barcode = product.barcode;
    this.price = product.price;
    this.discountedPrice = product.discountedPrice;
    this.quantity = product.quantity;
    this.status = product.status;
    this.tags = product.tags;
    this.GSTPercentage = product.GSTPercentage;
    this.productImages = product.productImages;
    this.variants = product.variants;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }
}

export default ProductDTO;
