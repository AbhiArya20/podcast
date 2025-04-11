import { Response, Request, NextFunction } from "express";
import CartService from "../services/cart_service.js";
class CartController {
  public static async find(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await CartService.find({
        user: req._id,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async updateOne(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  public static async create(req: Request, res: Response, next: NextFunction) {}

  public static async deleteOne(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}

export default CartController;
