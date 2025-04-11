import express from "express";
import AuthValidator from "../validators/auth_validator.js";
import AuthController from "../controllers/auth_controller.js";
import { rateLimiterMiddleware } from "../middlewares/rate_limiter_middleware.js";
import Config from "../config/config.js";
import AdminAuthController from "../controllers/admin_auth_controller.js";

const AuthRouter = express.Router();

// Login user with email and password
AuthRouter.post("/login", AuthValidator.login, AuthController.login);
AuthRouter.post("/admin/login", AuthValidator.login, AdminAuthController.login);

// Get new access token using refresh token
AuthRouter.get("/refresh-token", AuthController.refreshToken);
AuthRouter.get("/admin/refresh-token", AdminAuthController.refreshToken);

// Register new user
AuthRouter.post("/register", AuthValidator.register, AuthController.register);

// Send verification link to user's email address to verify their email;
AuthRouter.post(
  "/send-verification-link",
  AuthValidator.sendVerificationLink,
  AuthController.sendVerificationLink
);

// Verify user's email address using the verification link sent in the email
AuthRouter.post("/verify", AuthValidator.verify, AuthController.verify);

// Forgot password - send OTP to user's registered email address
AuthRouter.post(
  "/forgot-password-send-otp",
  rateLimiterMiddleware(
    Config.MAX_REQUEST_OTP,
    Config.WINDOW_SECONDS_OTP,
    Config.BLOCKED_FOR_SECONDS_OTP,
    "Auth"
  ),
  AuthValidator.forgotPasswordSendOtp,
  AuthController.forgotPasswordSendOtp
);

AuthRouter.post(
  "/admin/forgot-password-send-otp",
  rateLimiterMiddleware(
    Config.MAX_REQUEST_OTP,
    Config.WINDOW_SECONDS_OTP,
    Config.BLOCKED_FOR_SECONDS_OTP,
    "Auth"
  ),
  AuthValidator.forgotPasswordSendOtp,
  AdminAuthController.forgotPasswordSendOtp
);

// Verify OTP sent to user's registered email address to reset password
AuthRouter.post(
  "/forgot-password-verify-otp",
  rateLimiterMiddleware(
    Config.MAX_REQUEST_OTP,
    Config.WINDOW_SECONDS_OTP,
    Config.BLOCKED_FOR_SECONDS_OTP,
    "Auth"
  ),
  AuthValidator.forgotPasswordVerifyOtp,
  AuthController.forgotPasswordVerifyOtp
);

AuthRouter.post(
  "/admin/forgot-password-verify-otp",
  rateLimiterMiddleware(
    Config.MAX_REQUEST_OTP,
    Config.WINDOW_SECONDS_OTP,
    Config.BLOCKED_FOR_SECONDS_OTP,
    "Auth"
  ),
  AuthValidator.forgotPasswordVerifyOtp,
  AdminAuthController.forgotPasswordVerifyOtp
);

// Logout user from the application
AuthRouter.get("/logout", AuthController.logout);
AuthRouter.get("/admin/logout", AdminAuthController.logout);

export default AuthRouter;
