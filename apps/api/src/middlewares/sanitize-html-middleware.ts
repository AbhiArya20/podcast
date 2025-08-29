import sanitizeHtml from "sanitize-html";
import { NextFunction, Request, Response } from "express";



function sanitizeValue<T>(value: T): T {
  if (typeof value === "string") {
    return sanitizeHtml(value, {
      allowedTags: [],
      allowedAttributes: {},
    }) as T;
  } else if (Array.isArray(value)) {
    return value.map(sanitizeValue) as T;
  } else if (typeof value === "object" && value !== null) {
    return sanitizeObject(value as Record<string, unknown>) as T;
  }
  return value;
}



function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  for (const key in obj) {
    obj[key] = sanitizeValue(obj[key]);
  }
  return obj;
}



export default function (req: Request, res: Response, next: NextFunction) {
  if (req.body && typeof req.body === "object") {
    req.body = sanitizeValue(req.body);
  }
  next();
}
