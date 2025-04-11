import crypto from "crypto";
import Config from "../config/config.js";

export class HashServices {
  static hash(data: string): string {
    return crypto
      .createHmac("sha256", Config.HASH_SECRET)
      .update(data)
      .digest("hex");
  }
}
