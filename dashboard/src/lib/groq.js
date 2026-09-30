import { callAI } from "@/lib/aiClient";

// Groq now runs server-side (src/app/api/ai/route.js) so the API key never reaches the browser.
export const runGroq = (prompt) => callAI("groq", prompt);

// Multimodal call: prompt + an image file. Groq caps base64 image requests at 4MB;
// the server walks its vision models in order, falling back only on rate limits.
export const runGroqVision = (prompt, imageFile) => callAI("groq", prompt, imageFile);
