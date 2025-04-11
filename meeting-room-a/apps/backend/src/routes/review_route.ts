import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import ReviewController from "../controllers/review_controller.js";

const ReviewRouter = express.Router();

// Get all product review - for admin
ReviewRouter.get("/reviews", AuthMiddleware.middleware, ReviewController.find);

ReviewRouter.get(
  "/reviews/:_id",
  AuthMiddleware.middleware,
  ReviewController.findOne
);
ReviewRouter.post(
  "/reviews",
  // AuthMiddleware.middleware,
  ReviewController.create
);
ReviewRouter.put(
  "/reviews/:_id",
  // AuthMiddleware.middleware,
  ReviewController.updateOne
);
ReviewRouter.get(
  "/reviews/count",
  // AuthMiddleware.middleware,
  ReviewController.getCount
);

export default ReviewRouter;
