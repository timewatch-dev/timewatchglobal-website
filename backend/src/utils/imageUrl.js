import { config } from "../config/index.js";

export const withImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http")) return path; // safety
  return config.image.url + path;
};