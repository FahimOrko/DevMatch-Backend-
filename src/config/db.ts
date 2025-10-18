import mongoose from "mongoose";
import { db_url } from "./secrets";

const DB_URL = db_url;

async function connectDB() {
  try {
    await mongoose.connect(DB_URL as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit if DB connection fails
  }
}

export default connectDB;
