import express from "express";
import AuthMiddleware from "../middlewares/auth_middleware.js";
import UserController from "../controllers/user_controller.js";

const UserRouter = express.Router();

UserRouter.get("/users", AuthMiddleware.middleware, UserController.find);
UserRouter.get(
  "/users/:_id",
  // AuthMiddleware.middleware,
  UserController.findOne
);
UserRouter.post("/users", AuthMiddleware.middleware, UserController.create);
UserRouter.put(
  "/users/:_id",
  // AuthMiddleware.middleware,
  UserController.updateOne
);
UserRouter.get(
  "/users/count",
  // AuthMiddleware.middleware,
  UserController.getCount
);

export default UserRouter;
