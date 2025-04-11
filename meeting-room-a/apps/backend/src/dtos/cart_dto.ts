import { ICartSchema } from "../models/cart_model.js";
import { CartSchemaPopulatedType } from "../services/cart_service.js";
import AddressDTO from "./address_dto.js";
import ProductDTO from "./product_dto.js";
import UserDTO from "./user_dto.js";

class CartDTO {
  _id: string;
  user: string;
  product: ProductDTO;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(cart: CartSchemaPopulatedType) {
    this._id = cart._id;
    this.user = cart.user.toString();
    this.product = new ProductDTO(cart.product);
    this.quantity = cart.quantity;
    this.createdAt = cart.createdAt;
    this.updatedAt = cart.updatedAt;
  }
}

export default CartDTO;
