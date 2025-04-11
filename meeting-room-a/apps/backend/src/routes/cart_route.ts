import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import CartController from "../controllers/cart_controller.js";

const CartRouter = express.Router();

// Get products in you cart
CartRouter.get(
  "/cart",
  // AuthMiddleware.middleware,
  CartController.find
);

// Add a product to your cart
CartRouter.post(
  "/cart",
  // AuthMiddleware.middleware,
  CartController.create
);

// Update product quantity from your cart
CartRouter.put(
  "/cart/:_id",
  // AuthMiddleware.middleware,
  CartController.updateOne
);

// Remove a product from your cart
CartRouter.delete(
  "/cart/:_id",
  // AuthMiddleware.middleware,
  CartController.deleteOne
);

export default CartRouter;
