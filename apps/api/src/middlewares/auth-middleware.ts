
import tokenService from "@/services/token-service";
import { Request, Response, NextFunction } from "express";

export default async function authMiddleware (req: Request, res: Response, next: NextFunction) {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw new Error();
    }
    const userData = await tokenService.verifyAccessToken(accessToken);
    if (!userData || typeof userData === "string") {
      throw new Error();
    }
    req.user = userData as typeof req.user;
    req.id = userData._id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}
