import dotenv from "dotenv";
dotenv.config();

import { config } from "./src/config/index.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import routeStartup from "./src/routes/routeStartup.js";

// --------------------------------------------------x
// Fix __dirname (ESM)
// --------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --------------------------------------------------
// Connect DB (fail fast)
// --------------------------------------------------
connectDB();

// --------------------------------------------------
// App Init
// --------------------------------------------------
const app = express();

// --------------------------------------------------
// Core Middlewares
// --------------------------------------------------
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// CORS (env driven)
// --------------------------------------------------
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Postman / server calls

      if (config.cors.allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS: Origin not allowed"));
    },
    credentials: true,
  }),
);

// 🔴 ADD THIS BLOCK
app.use((err, req, res, next) => {
  if (err.message === "CORS: Origin not allowed") {
    return res.status(403).json({
      success: false,
      message: err.message,
    });
  }
  next(err);
});

// --------------------------------------------------
// Security Headers
// --------------------------------------------------
app.use(
  helmet({
    crossOriginResourcePolicy: false, // important for media/images
  }),
);

// --------------------------------------------------
// Logging (DEV ONLY)
// --------------------------------------------------
if (config.app.isDev) {
  app.use(morgan("dev"));
}

// --------------------------------------------------
// Static Files (uploads / public)
// --------------------------------------------------
app.use("/public", express.static(path.join(__dirname, "public")));

// --------------------------------------------------
// Routes
// --------------------------------------------------

app.use("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

routeStartup(app);

// --------------------------------------------------
// Global Error Handler
// --------------------------------------------------
app.use(errorHandler);

// --------------------------------------------------
// Start Server
// --------------------------------------------------
app.listen(config.app.port, () => {
  console.log(
    `🚀 Server running in ${config.app.env.toUpperCase()} on port http://localhost:${config.app.port}`,
  );
});
