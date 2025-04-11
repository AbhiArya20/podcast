import { Response, Request, NextFunction } from "express";
import { z } from "zod";
import { createValidationErrorResponse } from "../utils/response-classes.ts/error-response.js";
import {
  descriptionZod,
  iconColorZod,
  iconZod,
  statusZod,
  titleZod,
} from "./common_validation.js";

const createCollectionSchema = z.object({
  title: titleZod,
  description: descriptionZod.optional(),
  icon: iconZod,
  iconColor: iconColorZod,
});

const updateCollectionSchema = z.object({
  title: titleZod.optional(),
  description: descriptionZod.optional(),
  icon: iconZod.optional(),
  iconColor: iconColorZod.optional(),
  status: statusZod.optional(),
});

class CollectionValidator {
  public static update(req: Request, res: Response, next: NextFunction) {
    const { error, data } = updateCollectionSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static create(req: Request, res: Response, next: NextFunction) {
    const { error, data } = createCollectionSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }
}

export default CollectionValidator;
