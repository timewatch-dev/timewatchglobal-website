// controllers/authController.js
import asyncHandler from "express-async-handler";
import AuthModel from "../models/AuthModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await AuthModel.findOne({ email }).select("+password");

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  admin.password = undefined; // 🔐 CRITICAL

  const token = jwt.sign(
    { id: admin._id, email: admin.email, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    success: true,
    token,
    user: admin,
  });
});

// POST /api/auth/signup
export const signup = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  // 1. Validate
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // 2. Check existing user
  const existingUser = await AuthModel.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Create user
  const user = await AuthModel.create({
    name,
    email,
    password: hashedPassword,
    role: role || "admin", // or "user"
  });

  // 5. Generate token
  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(201).json({
    success: true,
    message: "Signup successful",
    token,
    user,
  });
});

// POST /api/auth/forgot-password
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await AuthModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  // Generate reset token
  const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  await user.save();

  // TODO: Send token via email
  // reset link example:
  // https://yourdomain.com/reset-password?token=xxxx

  res.status(200).json({
    success: true,
    message: "Password reset link sent",
    resetToken, // ⚠️ remove in production
  });
});

// POST /api/auth/reset-password
export const resetPassword = asyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Token and new password required",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Invalid or expired token",
    });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const result = await AuthModel.updateOne(
    { _id: decoded.id },
    {
      $set: {
        password: hashedPassword,
        resetPasswordToken: undefined,
        resetPasswordExpire: undefined,
      },
    }
  );

  if (result.modifiedCount === 0) {
    return res.status(400).json({
      success: false,
      message: "Password not updated",
    });
  }

  res.status(200).json({
    success: true,
    message: "Password reset successful",
  });
});
