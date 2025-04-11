import { ReviewSchemaPopulatedType } from "../services/review_service.js";
import ProductDTO from "./product_dto.js";
import UserDTO from "./user_dto.js";

class ReviewDTO {
  _id: string;
  user: UserDTO;
  product: ProductDTO;
  stars: number;
  title: string;
  description: string;
  status: "Published" | "Private" | "Deleted";
  createdAt: Date;
  updatedAt: Date;

  constructor(review: ReviewSchemaPopulatedType) {
    this._id = review._id.toString();
    this.user = new UserDTO(review.user);
    this.product = new ProductDTO(review.product);
    this.stars = review.stars;
    this.title = review.title;
    this.description = review.description;
    this.status = review.status;
    this.createdAt = review.createdAt;
    this.updatedAt = review.updatedAt;
  }
}

export default ReviewDTO;
