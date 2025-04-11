import {
  OrderedProductsSchemaPopulatedType,
  OrderSchemaPopulatedType,
} from "../services/order_service.js";
import AddressDTO from "./address_dto.js";
import ProductDTO from "./product_dto.js";
import UserDTO from "./user_dto.js";

class OrderDTO {
  _id: string;
  orderId: string;
  user: UserDTO;
  status:
    | "Pending"
    | "Ordered"
    | "Ready to Pickup"
    | "Delivered"
    | "Out for Delivery"
    | "Dispatched"
    | "Cancelled"
    | "Failed";
  paymentStatus: "Cancelled" | "Failed" | "Paid" | "Pending";
  address: AddressDTO;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;

  constructor(order: OrderSchemaPopulatedType) {
    this._id = order._id.toString();
    this.orderId = order.orderId.split("-")[0]!;
    this.user = new UserDTO(order.user);
    this.status = order.status;
    this.paymentStatus = order.paymentStatus;
    this.address = new AddressDTO(order.address);
    this.products = order.products.map((item) => new Product(item));
    this.createdAt = order.createdAt;
    this.updatedAt = order.updatedAt;
  }
}

class Product {
  product: ProductDTO;
  quantity: number;
  price: number;
  discountedPrice: number;
  GSTPercentage: number;
  actualPayment: number;

  constructor(prod: OrderedProductsSchemaPopulatedType) {
    this.product = new ProductDTO(prod.product);
    this.quantity = prod.quantity;
    this.price = prod.price;
    this.discountedPrice = prod.discountedPrice;
    this.GSTPercentage = prod.GSTPercentage;
    this.actualPayment = prod.actualPayment;
  }
}

export default OrderDTO;
