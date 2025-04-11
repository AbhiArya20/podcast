import { S3Client } from "@aws-sdk/client-s3";
import Config from "./config.js";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    secretAccessKey: Config.AWS_SECRET_ACCESS_KEY,
    accessKeyId: Config.AWS_ACCESS_KEY,
  },
});

export { s3Client };
