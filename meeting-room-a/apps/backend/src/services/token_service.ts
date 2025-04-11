import jwt from "jsonwebtoken";

import { IUserSchema } from "../models/user_model.js";
import Config from "../config/config.js";
import RefreshUserModel from "../models/refresh_user_model.js";
import UserDTO from "../dtos/user_dto.js";
import { ObjectId } from "mongoose";

class TokenService {
  // Verify Access Token
  public static async verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, Config.JWT_ACCESS_TOKEN_SECRET);
  }

  // Verify Refresh Token
  public static async verifyRefreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, Config.JWT_REFRESH_TOKEN_SECRET);
  }

  // Generates tokens
  public static async generateTokens(payload: UserDTO) {
    const accessToken = jwt.sign(payload, Config.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: Config.ACCESS_TOKEN_MAX_AGE,
    });
    const refreshToken = jwt.sign(payload, Config.JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: Config.ACCESS_TOKEN_MAX_AGE,
    });
    return { accessToken, refreshToken };
  }

  // Store Refresh Token
  public static async storeRefreshToken(
    refreshToken: string,
    userId: string | ObjectId
  ) {
    await RefreshUserModel.findOneAndUpdate(
      { userId },
      { $push: { token: refreshToken } },
      { upsert: true, new: true }
    );
  }

  // find RefreshToken
  public static async findRefreshToken(refreshToken: string, userId: string) {
    return await RefreshUserModel.findOne({
      userId,
      token: { $in: [refreshToken] },
    });
  }

  // Remove RefreshToken
  public static async removeRefreshToken(
    refreshToken: string,
    userId: string | ObjectId
  ) {
    return await RefreshUserModel.findOneAndUpdate(
      { userId, token: { $in: [refreshToken] } },
      { $pull: { token: refreshToken } }
    );
  }
}

export default TokenService;
