import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/notes`);
    console.log(
      `MongoDB Connected:\n  Host: ${conn.connection.host}\n  DB: ${conn.connection.name}`
    );
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connection established successfully.");
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB connection disconnected.");
});

mongoose.connection.on("error", (err) => {
  console.error(`❌ MongoDB connection error: ${err.message}`);
});

export default connectDB;
