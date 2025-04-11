import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import AdminAuthMiddleware from "../middlewares/admin_auth_middleware.js";
import VendorController from "../controllers/vendor_controller.js";
import VendorValidator from "../validators/vendor_validator.js";

const VendorRouter = express.Router();

// Get all vendors - for admin and public users
VendorRouter.get("/vendors", VendorController.find);

// TODO: Add Feature to add vendor image

// Get a single vendor by id - for admin
VendorRouter.get(
  "/vendors/:_id",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  VendorController.findOne
);

// Create a new vendor - for admin
VendorRouter.post(
  "/users",
  // VendorValidator.create,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  VendorController.create
);

// Update a vendor by id - for admin
VendorRouter.put(
  "/vendors/:_id",
  // VendorValidator.update,
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  VendorController.updateOne
);

export default VendorRouter;
