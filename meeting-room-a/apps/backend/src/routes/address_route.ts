import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import AddressController from "../controllers/address_controller.js";
import AdminAuthMiddleware from "../middlewares/admin_auth_middleware.js";
import AddressValidator from "../validators/address_validator.js";

const AddressRouter = express.Router();

// Get all own active addresses - for customers
AddressRouter.get(
  "/address",
  // AuthMiddleware.middleware,
  AddressController.find
);

// Get a single (Active) address by id - for customers
AddressRouter.get(
  "/address/:_id",
  // AuthMiddleware.middleware,
  AddressController.findOne
);

// Create a new address - for customers
AddressRouter.post(
  "/address",
  // AuthMiddleware.middleware,
  AddressValidator.create,
  AddressController.create
);

// Update an existing address - for customers
AddressRouter.put(
  "/address/:_id",
  // AuthMiddleware.middleware,
  AddressController.updateOne
);

// Get all active addresses of a customer - for admin
AddressRouter.get(
  "/address/admin/:user",
  // AuthMiddleware.middleware,
  // AdminAuthMiddleware.middleware,
  AddressController.findForAdmin
);

export default AddressRouter;
