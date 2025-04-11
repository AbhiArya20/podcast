import { Request, Response, NextFunction } from "express";
import TokenService from "../services/token_service.js";
import Config from "../config/config.js";
import Constants from "../utils/constants.js";
import ErrorResponse, {
  createAccountStatusErrorResponse,
} from "../utils/response-classes.ts/error-response.js";
import mongoose from "mongoose";

class AuthMiddleware {
  public static async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const accessToken = req.cookies?.[Config.ACCESS_TOKEN_KEY];

      if (!accessToken) {
        throw new Error("No token");
      }

      // Verify the token using tokenService
      const user = await TokenService.verifyAccessToken(accessToken);
      if (
        !user ||
        typeof user === "string" ||
        !user._id ||
        mongoose.Types.ObjectId.isValid(user._id) === false
      ) {
        throw new Error("Invalid token");
      }

      // Check if user is blocked or deleted
      if (user.status === "Blocked" || user.status === "Deleted") {
        return res
          .status(401)
          .json(createAccountStatusErrorResponse(user.status));
      }

      // Check if user is verified or not
      if (!user.isEmailVerified) {
        return res.status(401).json(
          new ErrorResponse({
            code: Constants.UNVERIFIED_USER,
            message: Constants.UNVERIFIED_USER_MESSAGE,
          })
        );
      }

      req.user = req.user;
      req._id = user._id;

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json(
        new ErrorResponse({
          code: Constants.INVALID_TOKEN,
          message: Constants.INVALID_ACCESS_TOKEN_MESSAGE,
        })
      );
    }
  }
}

export default AuthMiddleware;
