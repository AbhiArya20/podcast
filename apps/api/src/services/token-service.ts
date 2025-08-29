import RefreshModel from "@/models/refresh-model";
import jwt from "jsonwebtoken";
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET ?? "access_secret";
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET?? "refresh_secret";

class TokenService {
  generateTokens(payload: Object) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "1y",
    });
    return { accessToken, refreshToken };
  }

  async storeRefreshToken(refreshToken: string, userId: string) {
    await RefreshModel.findOneAndUpdate(
      { userId },
      { $push: { token: refreshToken } },
      { upsert: true, new: true },
    );
  }

  async verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, accessTokenSecret);
  }

  async verifyRefreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, refreshTokenSecret);
  }

  async findRefreshToken(userId: string, refreshToken: string) {
    return await RefreshModel.findOne({
      userId,
      token: { $in: [refreshToken] },
    });
  }

  async updateRefreshToken(userId: string, oldRefreshToken: string, refreshToken: string) {
    await this.removeToken(userId, oldRefreshToken);
    await RefreshModel.findOneAndUpdate(
      { userId },
      { $push: { token: refreshToken } },
      { upsert: true, new: true },
    );
  }

  async removeToken(userId: string, refreshToken: string) {
    return await RefreshModel.findOneAndUpdate(
      { userId, token: { $in: [refreshToken] } },
      { $pull: { token: refreshToken } },
    );
  }
}

export default new TokenService();
