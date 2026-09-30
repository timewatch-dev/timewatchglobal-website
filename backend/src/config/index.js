import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

/* -------------------- dotenv absolute path fix -------------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// adjust ../../ if your folder depth is different
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});
/* ---------------------------------------------------------------- */

const ENV = process.env.NODE_ENV || "development";

const requiredEnv = [
  "MONGO_URI",
  "JWT_SECRET",
  "EMAIL_USER",
  "EMAIL_PASS",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required env variable: ${key}`);
  }
});

export const config = {
  app: {
    port: process.env.PORT || 5003,
    env: ENV,
    isDev: ENV === "development",
    isProd: ENV === "production",
  },

  database: {
    mongoUri: process.env.MONGO_URI,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: "7d",
  },

  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    enabled: ENV === "production",
  },

  google: {
    sheetId: process.env.GOOGLE_SHEET_ID || null,
  },

  image: {
    url:
      process.env.MEDIA_BASE_URL ||
      `http://localhost:${process.env.PORT || 5003}`,
  },

  cors: {
    allowedOrigins: process.env.CORS_ORIGINS?.split(",") || [],
  },
};
