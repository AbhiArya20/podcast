import { Response, Request, NextFunction } from "express";
import { z } from "zod";
import { createValidationErrorResponse } from "../utils/response-classes.ts/error-response.js";
import {
  descriptionZod,
  statusZod,
  vendorNameZod,
} from "./common_validation.js";

const createVendorSchema = z.object({
  vendorName: vendorNameZod,
  description: descriptionZod.optional(),
  status: statusZod.optional(),
});

const updateVendorSchema = z.object({
  vendorName: vendorNameZod.optional(),
  description: descriptionZod.optional(),
  status: statusZod.optional(),
});

class VendorValidator {
  public static update(req: Request, res: Response, next: NextFunction) {
    const { error, data } = updateVendorSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static create(req: Request, res: Response, next: NextFunction) {
    const { error, data } = createVendorSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }
}

export default VendorValidator;
