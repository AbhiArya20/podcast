import { Request, Response, NextFunction } from "express";
import Constants from "../utils/constants.js";
import ErrorResponse, {
  createAccountStatusErrorResponse,
} from "../utils/response-classes.ts/error-response.js";

class AdminAuthMiddleware {
  public static async middleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (req.user?.isAdmin !== true) {
      return res.status(401).json(
        new ErrorResponse({
          code: Constants.UNAUTHORIZED_USER,
          message: Constants.UNAUTHORIZED_USER_MESSAGE,
        })
      );
    }
    next();
  }
}

export default AdminAuthMiddleware;
