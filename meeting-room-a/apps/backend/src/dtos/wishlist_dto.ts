import { WishlistSchemaPopulatedType } from "../services/wishlist_service.js";
import ProductDTO from "./product_dto.js";

class wishlistDTO {
  _id: string;
  user: string;
  product: ProductDTO;
  createdAt: Date;
  updatedAt: Date;

  constructor(wishlist: WishlistSchemaPopulatedType) {
    this._id = wishlist._id.toString();
    this.user = wishlist.user.toString();
    this.product = new ProductDTO(wishlist.product);
    this.createdAt = wishlist.createdAt;
    this.updatedAt = wishlist.updatedAt;
  }
}

export default wishlistDTO;
