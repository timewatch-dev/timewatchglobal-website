// models/User.js
import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" }, // admin or other roles
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

const AuthModel = mongoose.model("Auth", AuthSchema, "auth");
export default AuthModel;
