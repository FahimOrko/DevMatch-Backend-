import mongoose from "mongoose";
import { db_url } from "./secrets";
import log from "./logger";

const DB_URL = db_url;

async function connectDB() {
  try {
    await mongoose.connect(DB_URL as string);
    log.info("MongoDB connected successfully");
  } catch (err) {
    // @ts-expect-error: intentionally allowing any type here
    log.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

export default connectDB;
