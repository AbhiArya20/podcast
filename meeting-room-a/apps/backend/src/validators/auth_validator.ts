import { Response, Request, NextFunction } from "express";
import { z } from "zod";
import { createValidationErrorResponse } from "../utils/response-classes.ts/error-response.js";
import {
  emailZod,
  firstNameZod,
  hashZod,
  lastNameZod,
  otpZod,
  passwordZod,
} from "./common_validation.js";

const loginZodSchema = z.object({
  email: emailZod,
  password: passwordZod,
  remember: z.boolean().optional(),
});

const registerZodSchema = z.object({
  firstName: firstNameZod,
  lastName: lastNameZod,
  email: emailZod,
  password: passwordZod,
});

const emailZodSchema = z.object({
  email: emailZod,
});

const verifyZodSchema = z.object({
  email: emailZod,
  hash: hashZod,
});

const forgotPasswordVerifyOtpZodSchema = z
  .object({
    email: emailZod,
    hash: hashZod,
    otp: otpZod,
    newPassword: passwordZod,
    confirmNewPassword: passwordZod,
  })
  .refine(
    (values) => values.newPassword === values.confirmNewPassword,
    "The passwords do not match. Please re-enter them."
  );

class AuthValidator {
  public static login(req: Request, res: Response, next: NextFunction) {
    const { error, data } = loginZodSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static register(req: Request, res: Response, next: NextFunction) {
    const { error, data } = registerZodSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static sendVerificationLink(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error, data } = emailZodSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static verify(req: Request, res: Response, next: NextFunction) {
    const { error, data } = verifyZodSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static forgotPasswordSendOtp(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error, data } = emailZodSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static forgotPasswordVerifyOtp(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error, data } = forgotPasswordVerifyOtpZodSchema.safeParse(
      req.body
    );
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }
}

export default AuthValidator;
