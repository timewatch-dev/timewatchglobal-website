import path from "path";
import { writeFile, mkdir } from "fs/promises";
import slugify from "./slugify.js";

export async function saveUploadedFile(file, folderParts) {
  if (!file || !folderParts || !Array.isArray(folderParts)) {
    throw new Error("Valid file and folder path array are required.");
  }

  const originalName = slugify(path.parse(file.originalname).name);
  const extension = path.extname(file.originalname);

  const now = new Date();
  const timestamp =
    now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    "-" +
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0");

  const safeName = `${originalName}-${timestamp}${extension}`;

  const uploadDir = path.join(process.cwd(), "public", ...folderParts);
  const filePath = path.join(uploadDir, safeName);

  await mkdir(uploadDir, { recursive: true });
  await writeFile(filePath, file.buffer);

  return "/" + path.join(...folderParts, safeName).replace(/\\/g, "/");
}