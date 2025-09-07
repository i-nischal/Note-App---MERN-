import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import notesRouter from "./Routes/noteRoutes.js";

const app = express();
const PORT = process.env.PORT || 8001;

const startServer = async () => {
  try {
    // Middleware to parse JSON
    app.use(express.json());

    // Connect to MongoDB
    await connectDB();

    // Basic route
    app.get("/", (req, res) => {
      res.status(200).send("Welcome to Node.js + Express");
    });
    app.use("/api/notes", notesRouter);
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
