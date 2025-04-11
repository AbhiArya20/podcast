"use client";
import { z } from "zod";

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
  .min(8, "Password must contain at least 8 digits")
  .max(32, "Password must be less than or equal to 32 characters long.")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,32}$/,
    {
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character such as @#$!%*?&",
    }
  );
