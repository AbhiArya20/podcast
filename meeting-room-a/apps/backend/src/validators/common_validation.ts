import { z } from "zod";
import Constants from "../../../backend/src/utils/constants.js";
import mongoose from "mongoose";

const ObjectIdValidator = (message: string) => {
  return z.string().refine((value) => mongoose.Types.ObjectId.isValid(value), {
    message: message,
  });
};

export const userIdZod = ObjectIdValidator("User must be a valid user");

export const productIdZod = ObjectIdValidator(
  "Product must be a valid product"
);

export const vendorIdZod = ObjectIdValidator("Vendor must be a valid vendor");

export const quantityZod = z.number({
  message: "Quantity must be a valid number",
});

export const addressId = ObjectIdValidator("Address must be a valid address");

export const categoryIdZod = ObjectIdValidator(
  "Category must be a valid category"
);

export const collectionIdZod = ObjectIdValidator(
  "Collection must be a valid collection"
);

export const emailZod = z
  .string({ message: "Please provide a valid email address." })
  .trim()
  .toLowerCase()
  .min(3, "Email must contain at least 3 characters")
  .max(50, "Email must be less than or equal to 50 characters long.")
  .email({
    message: "Please provide a valid email address.",
  });

export const passwordZod = z
  .string({ message: "Password cannot be empty" })
  .trim()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/,
    {
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character such as @#$!%*?&",
    }
  )
  .min(8, "Password must contain at least 8 digits")
  .max(32, "Password must be less than or equal to 32 characters long.");

export const firstNameZod = z
  .string({ message: "First name cannot be empty" })
  .toLowerCase()
  .trim()
  .min(3, { message: "First name must be at least 3 characters long." })
  .max(30, {
    message: "First Name must be less than or equal to 30 characters long.",
  });

export const lastNameZod = z
  .string({ message: "Last name cannot be empty" })
  .toLowerCase()
  .trim()
  .min(3, { message: "Last name must be at least 3 characters long." })
  .max(30, {
    message: "Last Name must be less than or equal to 30 characters long.",
  })
  .optional();

// TODO: Fix number should be a valid number based on the country code
export const phoneNumberZod = z.object({
  countryCode: z.enum(["91", ...Constants.COUNTRY_CODES], {
    errorMap: () => ({
      message: "Country code must be a valid country code",
    }),
  }),
  number: z
    .string({ message: "Country code cannot be empty" })
    .min(1, "Phone number is required"),
});
// .refine(
//   (data) => {
//     try {
//       const phoneUtil = LibPhone.PhoneNumberUtil.getInstance();
//       const fullNumber = `+${data.countryCode}${data.number}`;
//       const phoneNumber = phoneUtil.parseAndKeepRawInput(
//         fullNumber,
//         data.countryCode
//       );

//

//       return phoneUtil.isValidNumber(phoneNumber);
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   },
//   {
//     message: "Invalid phone number",
//     path: ["countryCode", "number"],
//   }
// );

export const addressTypeZod = z.enum(["Home", "Work"], {
  errorMap: () => ({ message: "Address type must be either 'Home' or 'Work'" }),
});

export const addressZod = z
  .string({ message: "Address cannot be empty" })
  .trim()
  .min(3, { message: "Address must be at least 3 characters long" })
  .max(100, { message: "Address must be no more than 100 characters long" });

export const cityZod = z.enum(["Siwan", ...Constants.CITIES], {
  errorMap: () => ({ message: "City must be a valid city name" }),
});

export const stateZod = z.enum(["Bihar", ...Constants.STATES], {
  errorMap: () => ({ message: "State must be a valid state name" }),
});

export const countryZod = z.enum(["India", ...Constants.COUNTRIES], {
  errorMap: () => ({ message: "Country must be a valid country name" }),
});

// TODO: Fixed pinCodeZod it should be based on the selected country,state and city
export const pinCodeZod = z.string();

export const landmarkZod = z
  .string({ message: "Landmark cannot be empty" })
  .trim()
  .min(3, { message: "Landmark must be at least 3 characters long" })
  .max(100, { message: "Landmark must be no more than 100 characters long" });

export const addressStatusZod = z.enum(["Active", "Default", "Deleted"], {
  errorMap: () => ({
    message: "Address status must be either 'Active', 'Default'",
  }),
});

export const hashZod = z.string({ message: "Token cannot be empty" }).trim();

export const otpZod = z
  .number()
  .min(100000, { message: "OTP must be a 6-digit number." })
  .max(999999, { message: "OTP must be a 6-digit number." });

export const titleZod = z
  .string({ message: "Title cannot be empty" })
  .trim()
  .min(3, "Title must be at least 3 characters long.")
  .max(15, "Title must be at most 15 characters long.")
  .toLowerCase();

export const descriptionZod = z
  .string({ message: "Description cannot be empty" })
  .trim()
  .min(50, "Description must be at least 50 characters long.")
  .max(200, "Description must be at most 200 characters long.");

export const iconZod = z
  .string({ message: "Please select a valid icon" })
  .trim();

export const iconColorZod = z
  .string({ message: "Icon Color cannot be empty" })
  .trim();

export const statusZod = z.enum(["Active", "Deactivated", "Deleted"]);

export const userStatusZod = z.enum(["Active", "Blocked", "Deleted"]);

export const reviewStatusZod = z.enum(["Published", "Private", "Deleted"]);

export const productStatusZod = z.enum(["Inactive", "Scheduled", "Published"]);

export const orderStatusZod = z.enum(
  [
    "Pending",
    "Ordered",
    "Ready to Pickup",
    "Delivered",
    "Out for Delivery",
    "Dispatched",
    "Cancelled",
    "Failed",
  ],
  { message: "Invalid order status" }
);

export const vendorNameZod = z
  .string({ message: "Vendor name cannot be empty" })
  .trim()
  .toLowerCase()
  .min(1, { message: "Vendor name must be at least 1 characters long." })
  .max(50, {
    message: "Vendor Name must be less than or equal to 50 characters long.",
  });

export const imageSchema = z.object({
  image: z.string(),
  blurHash: z.string(),
  etag: z.string(),
});

export const starsZod = z
  .number({ message: "Stars must be a valid number" })
  .refine((value) => value >= 1 && value <= 5, {
    message: "Stars must be between 1 and 5",
  });

export const reviewDescriptionZod = z
  .string({ message: "Description cannot be empty" })
  .trim()
  .min(1, "Description cannot be empty")
  .max(200, "Description must be at most 200 characters long.");

export const reviewTitleZod = z
  .string({ message: "Review Title cannot be empty" })
  .min(1, { message: "Review Title cannot be empty" })
  .max(200, { message: "Review Title more than 200 characters" });

export const productNameZod = z
  .string({ message: "Product Name cannot be empty" })
  .trim()
  .toLowerCase()
  .min(1, { message: "Product Name cannot be empty" })
  .max(50, { message: "Product Name must be at most 50 characters long." });

export const inStockZod = z.boolean();

export const skuZod = z.string({ message: "SKU cannot be empty" }).trim();

export const barcodeZod = z
  .string({ message: "Barcode cannot be empty" })
  .trim();

export const priceZod = z
  .number({ message: "Price must be a valid number" })
  .min(0, "price cannot be negative");

export const discountedPriceZod = z
  .number({ message: "Discounted Price must be a valid number" })
  .min(0, "Discount price cannot be negative");

export const GSTPercentageZod = z
  .number({ message: "GST Percentage must be a valid number" })
  .refine((value) => [0, 5, 12, 18, 28].includes(value), {
    message: "GST Percentage must be one of 0 5 12 18 28",
  });

export const tags = z.array(
  z.string().max(15, "Tag must be at most 15 characters long.")
);

export const productVariants = z.array(
  z.object({
    key: z.enum(
      [
        "Color",
        "Size",
        "Length",
        "Diameter",
        "Weight",
        "Material",
        "Power Rating",
        "Range",
        "Resistance",
        "Voltage Rating",
        "Current Rating",
        "Protection",
        "Conductivity",
        "Connector",
        "Pin Count",
        "Mounting",
        "Output",
        "Speed",
        "Signal",
        "Efficiency",
        "Backup Time",
        "Power Supply",
        "Temperature Range",
      ],
      {
        errorMap: () => ({ message: "Invalid product variant key" }),
      }
    ),
    value: z
      .string()
      .min(1, "Value cannot be empty")
      .max(20, "Variant value must be at most 50 characters long"),
  })
);
