import express from "express";

import {
  login,
  signup,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();


router.post("/login", login);
// Only a logged-in admin may create new accounts (was open to the public)
router.post("/singup", protect, signup);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
