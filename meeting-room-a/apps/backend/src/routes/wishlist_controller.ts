import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import WishlistController from "../controllers/wishlist_controller.js";

const WishlistRouter = express.Router();

WishlistRouter.get(
  "/wishlists",
  // AuthMiddleware.middleware,
  WishlistController.find
);
WishlistRouter.get(
  "/wishlists/:_id",
  // AuthMiddleware.middleware,
  WishlistController.findOne
);
WishlistRouter.post(
  "/wishlists",
  // AuthMiddleware.middleware,
  WishlistController.create
);
WishlistRouter.put(
  "/wishlists/:_id",
  // AuthMiddleware.middleware,
  WishlistController.updateOne
);
WishlistRouter.get(
  "/wishlists/count",
  // AuthMiddleware.middleware,
  WishlistController.getCount
);

export default WishlistRouter;
