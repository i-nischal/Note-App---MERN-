import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import notesRouter from "./Routes/noteRoutes.js";
import rateLimiter from "./Middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 8001;

const startServer = async () => {
  try {
    // Middleware to parse JSON
    app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );
    app.use(express.json());
    app.use(rateLimiter);

    // Connect to MongoDB
    await connectDB();

    // Basic route
    app.use("/api/notes", notesRouter);
    app.get("/", (req, res) => {
      res.status(200).send("Welcome to Node.js + Express");
    });
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`❌ Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
