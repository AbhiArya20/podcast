import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import ProductController from "../controllers/product_controller.js";
import AdminAuthMiddleware from "../middlewares/admin_auth_middleware.js";

const ProductRouter = express.Router();

// Get all products - for admin or public users
ProductRouter.get("/products", ProductController.find);

// Get a single product by id - for admin or public users
ProductRouter.get("/products/:_id", ProductController.findOne);

// Create a new product - for admin
ProductRouter.post(
  "/products",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  ProductController.create
);

// Update an existing product - for admin
ProductRouter.put(
  "/products/:_id",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  ProductController.updateOne
);

export default ProductRouter;
