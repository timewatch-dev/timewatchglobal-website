import mongoose from "mongoose";
import {config} from "./index.js"

const connectDB = async () => {
  try {
    await mongoose.connect(config.database.mongoUri);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
