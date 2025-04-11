import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import CollectionController from "../controllers/collection_controller.js";
import CollectionValidator from "../validators/collection_validator.js";
import AdminAuthMiddleware from "../middlewares/admin_auth_middleware.js";

const CollectionRouter = express.Router();

// Get all collections - for admin or public users
CollectionRouter.get("/collections", CollectionController.find);

// Get a single collection by id - for admin
CollectionRouter.get(
  "/collections/:_id",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CollectionController.findOne
);

// Create a new collection - for admin
CollectionRouter.post(
  "/collections",
  // CollectionValidator.create,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CollectionController.create
);

// Update an existing collection - for admin
CollectionRouter.put(
  "/collections/:_id",
  // CollectionValidator.update,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  CollectionController.updateOne
);

export default CollectionRouter;
