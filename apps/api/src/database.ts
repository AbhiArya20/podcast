import mongoose from "mongoose";
async function DbConnect() {
  const DB_URL = process.env.DB_URL ?? "mongodb://localhost:27017/meeting-room";
  await mongoose.connect(DB_URL);
  console.log("DB connected...");
}

export default DbConnect;
