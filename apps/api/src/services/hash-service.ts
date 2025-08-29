import crypto from "crypto";

class HashService {
  hashOtp(data: string) {
    return crypto
      .createHmac("sha256", process.env.HASH_SECRET ?? "hash_secret")
      .update(data)
      .digest("hex");
  }
}

export default new HashService();
