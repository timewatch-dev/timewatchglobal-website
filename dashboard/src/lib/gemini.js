import { callAI } from "@/lib/aiClient";

// Gemini now runs server-side (src/app/api/ai/route.js) so the API key never reaches the browser.
export const runGemini = (prompt) => callAI("gemini", prompt);

// Multimodal call: prompt + an image file (e.g. product photo, spec sheet scan)
export const runGeminiVision = (prompt, imageFile) => callAI("gemini", prompt, imageFile);
