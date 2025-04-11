import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import CategoryController from "../controllers/category_controller.js";
import AdminAuthMiddleware from "../middlewares/admin_auth_middleware.js";
import CategoryValidator from "../validators/category_validator.js";

const CategoryRouter = express.Router();

// Get all categories - for admin or public users
CategoryRouter.get("/categories", CategoryController.find);

// Get a single category by id - for admin
CategoryRouter.get(
  "/categories/:_id",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CategoryController.findOne
);

// Create a new category - for admin
CategoryRouter.post(
  "/categories",
  CategoryValidator.create,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CategoryController.create
);

// Update an existing category - for admin
CategoryRouter.put(
  "/categories/:_id",
  // CategoryValidator.update,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CategoryController.updateOne
);

export default CategoryRouter;
