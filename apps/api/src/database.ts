import mongoose from "mongoose";
async function DbConnect() {
  const DB_URL = process.env.MONGO_URL ?? "mongodb://localhost:27017/podcast";
  await mongoose.connect(DB_URL);
  console.log("DB connected on", DB_URL);
}

export default DbConnect;
