import { Response, Request, NextFunction } from "express";
import { z } from "zod";
import { createValidationErrorResponse } from "../utils/response-classes.ts/error-response.js";
import {
  addressStatusZod,
  addressTypeZod,
  addressZod,
  cityZod,
  countryZod,
  firstNameZod,
  landmarkZod,
  lastNameZod,
  phoneNumberZod,
  stateZod,
  pinCodeZod,
} from "./common_validation.js";

// Main address schema with custom error messages
const createAddressSchema = z.object({
  addressType: addressTypeZod, // Enums for addressType with custom error message
  firstName: firstNameZod,
  lastName: lastNameZod.optional(),
  address: addressZod,
  city: cityZod,
  state: stateZod,
  country: countryZod,
  pinCode: pinCodeZod,
  landmark: landmarkZod.optional(),
  phoneNumber: phoneNumberZod,
  status: addressStatusZod.optional().refine(
    (value) => {
      return value !== "Deleted";
    },
    {
      message: "You cannot create a new address with Deleted status",
    }
  ),
});

// TODO: Find solution to verify pin code or like flipkart when user add pin code find city name and all,
// TODO: Find solution to verify phone number
// .refine(
//   (ctx) => {
//     const countryCode = ctx.parent?.countryCode;

//     if (!countryCode) {
//       return false;
//     }

//     const isValid = PostalCodes.validate(value, countryCode);
//     return isValid;
//   },
//   {
//     message: "Invalid pin code format for the given country",
//   }
// )

const updateAddressSchema = z.object({
  addressType: addressTypeZod.optional(), // Enums for addressType with custom error message
  firstName: firstNameZod.optional(),
  lastName: lastNameZod.optional(),
  address: addressZod.optional(),
  city: cityZod.optional(),
  state: stateZod.optional(),
  country: countryZod.optional(),
  pinCode: pinCodeZod.optional(),
  landmark: landmarkZod.optional(),
  phoneNumber: phoneNumberZod.optional(),
  status: addressStatusZod.optional(),
});

class AddressValidator {
  public static update(req: Request, res: Response, next: NextFunction) {
    const { error, data } = updateAddressSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }

  public static create(req: Request, res: Response, next: NextFunction) {
    const { error, data } = createAddressSchema.safeParse(req.body);
    if (error)
      return res.status(400).json(createValidationErrorResponse(error));
    req.body = data;
    next();
  }
}

export default AddressValidator;
