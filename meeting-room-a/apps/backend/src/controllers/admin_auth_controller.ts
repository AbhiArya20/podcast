import { Response, Request, NextFunction } from "express";
import Config from "../config/config.js";
import TokenService from "../services/token_service.js";
import UserService from "../services/user_service.js";
import bcrypt from "bcrypt";
import Constants from "../utils/constants.js";
import ErrorResponse, {
  createAccountStatusErrorResponse,
  createInvalidRefreshTokenErrorResponse,
} from "../utils/response-classes.ts/error-response.js";
import UserDTO from "../dtos/user_dto.js";
import { SuccessResponse } from "../utils/response-classes.ts/success-response.js";
import { SendEmailService } from "../services/email_service.js";
import { HashServices } from "../services/hash_services.js";
import crypto from "crypto";
import RedisClient from "../config/redis.js";

class AdminAuthController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      // Check if email is registered
      const user = await UserService.findOneWithEmail({ email });
      if (!user || !user.isAdmin) {
        return res.status(400).json(
          new ErrorResponse({
            code: Constants.INVALID_CREDENTIALS,
            message: Constants.EMAIL_NOT_REGISTER,
          })
        );
      }

      // Check password match against password provided in the request
      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).json(
          new ErrorResponse({
            code: Constants.INVALID_CREDENTIALS,
            message: Constants.INCORRECT_PASSWORD,
          })
        );
      }

      // Create UserDTO
      const formattedUser = new UserDTO(user);

      const { status, isEmailVerified } = formattedUser;

      // Check if user is blocked or deleted
      if (status === "Blocked" || status === "Deleted") {
        return res
          .status(status === "Blocked" ? 403 : 404)
          .json(createAccountStatusErrorResponse(status));
      }

      // Check if user is verified
      if (!isEmailVerified) {
        delete formattedUser.customerId; // Important delete for security
        return res.status(200).json(
          new SuccessResponse({
            data: formattedUser,
            code: Constants.UNVERIFIED_USER,
            message: Constants.UNVERIFIED_USER_MESSAGE,
          })
        );
      }

      // Set cookies and Send response
      await setCookies(res, { ...formattedUser });
      return res.status(200).json(
        new SuccessResponse({
          data: formattedUser,
          code: Constants.LOGIN_SUCCESS,
          message: Constants.LOGIN_SUCCESS_MESSAGE,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const refreshTokenFromCookie = req.cookies[Config.REFRESH_TOKEN_KEY];
      // Validate refresh token
      let user;
      try {
        user = await TokenService.verifyRefreshToken(refreshTokenFromCookie);
        if (typeof user !== "string" && user._id) {
          const token = await TokenService.removeRefreshToken(
            refreshTokenFromCookie,
            user._id
          );
          if (!token) {
            throw new Error("Token Not Found");
          }
        }
      } catch (error) {
        console.error(error);
        return res.status(401).json(createInvalidRefreshTokenErrorResponse());
      }

      if (typeof user !== "string" && user.email) {
        // Check user's existence
        user = await UserService.findOneWithEmail({ email: user.email });
        if (!user || !user.isAdmin) {
          return res.status(401).json(
            new ErrorResponse({
              code: Constants.NOT_FOUND,
              message: Constants.USER_NOT_FOUND_MESSAGE,
            })
          );
        }

        // Check user's status
        const { status } = user;
        if (status === "Blocked" || status === "Deleted") {
          return res.status(401).json(createAccountStatusErrorResponse(status));
        }

        // Create UserDTO
        const formattedUser = new UserDTO(user);

        // Delete CustomerId if user's email is not verified
        if (!formattedUser.isEmailVerified) {
          delete formattedUser.customerId; // Important delete for security
        }

        // Set cookies and Send response
        await setCookies(res, { ...formattedUser });
        return res.status(200).json(
          new SuccessResponse({
            data: formattedUser,
            code: Constants.LOGIN_SUCCESS,
            message: Constants.LOGIN_SUCCESS_MESSAGE,
          })
        );
      } else {
        return res.status(401).json(createInvalidRefreshTokenErrorResponse());
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // TODO: Add IP2Location to update users country.
  // TODO: Check if users IP2Location does changes update while refresh token or login.
  // TODO: Update Social icons in email
  // public static async register(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     // Check if the user is already registered else create a new user
  //     const { email, password, firstName, lastName } = req.body;
  //     let user = await UserService.findOneWithEmail({ email });
  //     if (user) {
  //       return res.status(400).json(
  //         new ErrorResponse({
  //           code: Constants.USER_ALREADY_REGISTERED,
  //           message: Constants.USER_REGISTERED_MESSAGE,
  //         })
  //       );
  //     }

  //     const customerId = uuid();
  //     user = await UserService.create({
  //       email,
  //       password,
  //       firstName,
  //       lastName,
  //       customerId,
  //     });

  //     // Send email for verification
  //     const expireTime = Date.now() + 30 * 60 * 1000; // 30 minutes
  //     const data = `${email}.${customerId}.${expireTime}`;
  //     const hash = HashServices.hash(data);

  //     await SendEmailService.sendVerifyEmail(
  //       email,
  //       user.firstName,
  //       hash + "-" + expireTime
  //     );

  //     // Create DTO and send response
  //     const formattedUser = new UserDTO(user);
  //     delete formattedUser.customerId; // Important delete for security
  //     return res.status(200).json(
  //       new SuccessResponse({
  //         data: formattedUser,
  //         code: Constants.REGISTRATION_SUCCESS,
  //         message: Constants.REGISTRATION_SUCCESS_MESSAGE,
  //       })
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // }

  // public static async sendVerificationLink(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     // Check if the user is registered
  //     const { email } = req.body;
  //     let user = await UserService.findOneWithEmail({ email });
  //     if (!user) {
  //       return res.status(404).json(
  //         new ErrorResponse({
  //           code: Constants.NOT_FOUND,
  //           message: Constants.USER_NOT_FOUND_MESSAGE,
  //         })
  //       );
  //     }

  //     if (user.isEmailVerified) {
  //       return res.status(406).json(
  //         new ErrorResponse({
  //           code: Constants.ALREADY_VERIFIED,
  //           message: Constants.ALREADY_VERIFIED_MESSAGE,
  //         })
  //       );
  //     }

  //     // send email for verification
  //     const expireTime = Date.now() + 30 * 60 * 1000; // 30 minutes
  //     const data = `${email}.${user.customerId}.${expireTime}`;
  //     const hash = HashServices.hash(data);

  //     await SendEmailService.sendVerifyEmail(
  //       email,
  //       user.firstName,
  //       hash + "-" + expireTime
  //     );

  //     // Create DTO
  //     const formattedUser = new UserDTO(user);
  //     delete formattedUser.customerId; // Important delete for security
  //     return res.status(200).json(
  //       new SuccessResponse({
  //         data: formattedUser,
  //         code: Constants.VERIFICATION_LINK_SEND,
  //         message: Constants.VERIFICATION_LINK_SEND_MESSAGE,
  //       })
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // }

  // public static async verify(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { email, hash } = req.body;

  //     const [hashFromFrontend, expireTime] = hash.split("-");

  //     // Check for hash expired?
  //     if (+expireTime < Date.now()) {
  //       return res.status(408).json(
  //         new ErrorResponse({
  //           code: Constants.REQUEST_TIMEOUT,
  //           message: Constants.EXPIRE_VERIFICATION_LINK_MESSAGE,
  //         })
  //       );
  //     }

  //     // Check user is registered
  //     let user = await UserService.findOneWithEmail({ email });
  //     if (!user) {
  //       return res.status(404).json(
  //         new ErrorResponse({
  //           code: Constants.INVALID_LINK,
  //           message: Constants.INVALID_VERIFICATION_LINK_MESSAGE,
  //         })
  //       );
  //     }

  //     // Verify Hash
  //     const data = `${email}.${user.customerId}.${expireTime}`;
  //     const actualHash = HashServices.hash(data);

  //     if (hashFromFrontend != actualHash) {
  //       return res.status(400).json(
  //         new ErrorResponse({
  //           code: Constants.INVALID_LINK,
  //           message: Constants.INVALID_VERIFICATION_LINK_MESSAGE,
  //         })
  //       );
  //     }

  //     if (user.isEmailVerified) {
  //       return res.status(409).json(
  //         new ErrorResponse({
  //           code: Constants.ALREADY_VERIFIED,
  //           message: Constants.ALREADY_VERIFIED_MESSAGE,
  //         })
  //       );
  //     }

  //     // Check user's status
  //     const { status } = user;
  //     if (status === "Blocked" || status === "Deleted") {
  //       return res
  //         .status(status === "Blocked" ? 403 : 404)
  //         .json(createAccountStatusErrorResponse(status));
  //     }

  //     // Update user's email verified
  //     user = await UserService.updateOne(
  //       { _id: user._id },
  //       { $set: { isEmailVerified: true } }
  //     );

  //     const formattedUser = new UserDTO(user!);
  //     return res.status(200).json(
  //       new SuccessResponse({
  //         data: formattedUser,
  //         code: Constants.VERIFICATION_SUCCESSFUL,
  //         message: Constants.VERIFICATION_SUCCESSFUL_MESSAGE,
  //       })
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // }

  public static async forgotPasswordSendOtp(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // Check user registered
      const { email } = req.body;
      let user = await UserService.findOneWithEmail({ email });
      if (!user || !user.isAdmin) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.USER_NOT_FOUND_MESSAGE,
          })
        );
      }

      // Check user's status
      const { status } = user;
      if (status === "Blocked" || status === "Deleted") {
        return res
          .status(status === "Blocked" ? 403 : 404)
          .json(createAccountStatusErrorResponse(status));
      }

      // Generate OTP and hash
      const otp = await crypto.randomInt(100000, 1000000);
      const expireTime = Date.now() + 5 * 60 * 1000;
      const data = `${email}.${otp}.${expireTime}`;
      const hash = HashServices.hash(data);

      // Send OTP via email and send response
      await SendEmailService.sendOTPEmail(email, user.firstName, otp);

      return res.status(200).json(
        new SuccessResponse({
          data: { hash: `${hash}.${expireTime}`, email },
          code: Constants.OTP_SENT,
          message: Constants.OTP_SENT_MESSAGE,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async forgotPasswordVerifyOtp(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { otp, hash, email, newPassword } = req.body;

      const [hashFromFrontend, expireTime] = hash.split(".");

      // Check for OTP expired?
      if (expireTime < Date.now()) {
        return res.status(408).json(
          new ErrorResponse({
            code: Constants.REQUEST_TIMEOUT,
            message: Constants.OTP_EXPIRED_MESSAGE,
          })
        );
      }

      // Check OTP is correct
      const data = `${email}.${otp}.${expireTime}`;
      const computedHash = HashServices.hash(data);

      if (computedHash !== hashFromFrontend) {
        return res.status(400).json(
          new ErrorResponse({
            code: Constants.INVALID_OTP,
            message: Constants.OTP_INVALID_MESSAGE,
          })
        );
      }

      const key = "OTP:" + email + ":" + otp;
      const isUsed = await RedisClient.get(key);

      if (isUsed) {
        return res.status(406).json(
          new ErrorResponse({
            code: Constants.OTP_USED,
            message: Constants.OTP_USED_MESSAGE,
          })
        );
      }

      await RedisClient.setex(key, 300, 1);

      // Check user registered
      let user = await UserService.findOneWithEmail({ email });
      if (!user || !user.isAdmin) {
        return res.status(404).json(
          new ErrorResponse({
            code: Constants.NOT_FOUND,
            message: Constants.USER_NOT_FOUND_MESSAGE,
          })
        );
      }

      // Check user's status
      const { status } = user;
      if (status === "Blocked" || status === "Deleted") {
        return res.status(401).json(createAccountStatusErrorResponse(status));
      }

      user = await UserService.updateOne(
        { _id: user._id },
        { $set: { password: newPassword } }
      );

      // Create DTO
      const formattedUser = new UserDTO(user!);

      // Delete CustomerId if user's email is not verified
      if (!formattedUser.isEmailVerified) {
        delete formattedUser.customerId; // Important delete for security
      }

      // Set cookies and Send response
      await setCookies(res, { ...formattedUser });
      return res.status(200).json(
        new SuccessResponse({
          data: formattedUser,
          code: Constants.LOGIN_SUCCESS,
          message: Constants.LOGIN_SUCCESS_MESSAGE,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  public static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.cookies[Config.REFRESH_TOKEN_KEY];
      await TokenService.removeRefreshToken(refreshToken, req._id!.toString());
      res.clearCookie(Config.ACCESS_TOKEN_KEY);
      res.clearCookie(Config.REFRESH_TOKEN_KEY);
      return res
        .status(200)
        .json(new SuccessResponse({ data: null, code: "", message: "" }));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

async function setCookies(
  res: Response,
  user: UserDTO,
  remember: boolean = false
) {
  // Create token and store in DB
  const { accessToken, refreshToken } = await TokenService.generateTokens(user);
  await TokenService.storeRefreshToken(refreshToken, user._id);

  // Set cookies in response
  res.cookie(Config.ACCESS_TOKEN_KEY, accessToken, {
    maxAge: Config.ACCESS_TOKEN_MAX_AGE / 1000,
    httpOnly: false,
    secure: Config.IS_SECURE,
    sameSite: "lax",
  });
  res.cookie(Config.REFRESH_TOKEN_KEY, refreshToken, {
    maxAge: remember ? Config.REFRESH_TOKEN_MAX_AGE : undefined,
    httpOnly: false,
    secure: Config.IS_SECURE,
    sameSite: "lax",
  });
}

export default AdminAuthController;
