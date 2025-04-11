import { config } from "dotenv";
config();
// TODO: Change all appearance of jainsons
// TODO: Change default configuration with example once deliver in production
class Config {
  // Server configuration
  static readonly PORT = process.env.PORT || 3003;
  static readonly DB_URL =
    process.env.DB_URL_ATLAS ||
    "mongodb+srv://mithilastack1:Mithilastack%4018092023@edudoor.stteoe7.mongodb.net/jainsons";
  static readonly CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",") ?? [
    "https://admin.jainsonsindia.abhiarya.in",
    "https://jainsonsindia.abhiarya.in/",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
  ];
  static readonly HASH_SECRET = process.env.HASH_SECRET || "jainsons";
  static readonly IS_SECURE =
    process.env.IS_SECURE ? Boolean(process.env.IS_SECURE) : true;

  // Rate limiter configuration
  static readonly MAX_REQUEST =
    process.env.MAX_REQUEST ? parseInt(process.env.MAX_REQUEST) : 500;
  static readonly WINDOW_SECONDS =
    process.env.WINDOW_SECONDS ? parseInt(process.env.WINDOW_SECONDS) : 300;
  static readonly BLOCKED_FOR_SECONDS =
    process.env.BLOCKED_FOR_SECONDS ?
      parseInt(process.env.BLOCKED_FOR_SECONDS)
    : 900;

  static readonly MAX_REQUEST_OTP =
    process.env.MAX_REQUEST ? parseInt(process.env.MAX_REQUEST) : 10;
  static readonly WINDOW_SECONDS_OTP =
    process.env.WINDOW_SECONDS ? parseInt(process.env.WINDOW_SECONDS) : 300;
  static readonly BLOCKED_FOR_SECONDS_OTP =
    process.env.BLOCKED_FOR_SECONDS ?
      parseInt(process.env.BLOCKED_FOR_SECONDS)
    : 900;

  // Redis configuration
  static readonly REDIS_HOST = process.env.REDIS_HOST || "localhost";
  static readonly REDIS_PORT =
    process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379;
  static readonly REDIS_USERNAME = process.env.REDIS_USERNAME ?? "default";
  static readonly REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? "jainsons";
  static readonly CACHE_TIME = process.env.CACHE_TIME ?? 300;

  // JWT Token Configuration
  static readonly JWT_ACCESS_TOKEN_SECRET =
    process.env.JWT_ACCESS_TOKEN_SECRET || "jainsons";
  static readonly JWT_REFRESH_TOKEN_SECRET =
    process.env.JWT_REFRESH_TOKEN_SECRET || "jainsons";
  static readonly ACCESS_TOKEN_KEY =
    process.env.ACCESS_TOKEN_KEY ?? "accessToken";
  static readonly REFRESH_TOKEN_KEY =
    process.env.ACCESS_TOKEN_KEY ?? "refreshToken";
  static readonly ACCESS_TOKEN_MAX_AGE =
    process.env.ACCESS_TOKEN_MAX_AGE ?
      parseInt(process.env.ACCESS_TOKEN_MAX_AGE)
    : 31536000000;
  static readonly REFRESH_TOKEN_MAX_AGE =
    process.env.REFRESH_TOKEN_MAX_AGE ?
      parseInt(process.env.REFRESH_TOKEN_MAX_AGE)
    : 31536000000;

  // AWS Configuration
  static readonly AWS_SECRET_ACCESS_KEY =
    process.env.AWS_SECRET_ACCESS_KEY || "your-secret-access-key";
  static readonly AWS_ACCESS_KEY =
    process.env.AWS_ACCESS_KEY || "your-access-key";

  // SMTP Configuration
  static readonly SMTP_EMAIL =
    process.env.SMTP_EMAIL || "emailtestotp19@gmail.com";
  static readonly SMTP_PASSWORD =
    process.env.SMTP_PASSWORD || "ldtbpksigdrqdksw";
  static readonly SMTP_SERVICE = process.env.SMTP_SERVICE || "gmail";
  static readonly SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
  static readonly SMTP_PORT =
    process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;

  // Backend Configuration
  static readonly BACKEND_URL =
    process.env.BACKEND_URL ?? "https://api.jainsonsindia.abhiarya.in";

  static readonly FRONTEND_URL =
    process.env.FRONTEND_URL ?? "https://admin.jainsonsindia.abhiarya.in";
}

export default Config;
