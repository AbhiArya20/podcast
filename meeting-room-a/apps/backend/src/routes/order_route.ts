import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import OrderController from "../controllers/order_controller.js";

const OrderRouter = express.Router();

// Get user's order history - for customers
OrderRouter.get("/orders", AuthMiddleware.middleware, OrderController.find);

// Get user's order details - for customers
OrderRouter.get(
  "/orders/:_id",
  // AuthMiddleware.middleware,
  OrderController.findOne
);

// Place a new order - for customers
OrderRouter.post("/orders", AuthMiddleware.middleware, OrderController.create);

// Cancel the order or update the address - for customers
OrderRouter.put(
  "/orders/:_id",
  // AuthMiddleware.middleware,
  OrderController.updateOne
);

// Get user's order history - for admin
OrderRouter.get(
  "/orders/admin:user",
  // AuthMiddleware.middleware,
  OrderController.findForAdmin
);

// Get user's order details - for admin
OrderRouter.get(
  "/orders/admin/:user/:_id",
  // AuthMiddleware.middleware,
  OrderController.findOneForAdmin
);

OrderRouter.get("/congratulation/orders", OrderController.orderStats);

export default OrderRouter;
