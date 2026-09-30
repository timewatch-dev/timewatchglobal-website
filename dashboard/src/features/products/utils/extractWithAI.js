import { runGeminiVision } from "@/lib/gemini";
import { runGroqVision } from "@/lib/groq";
import toast from "react-hot-toast";

// Gemini sometimes wraps JSON in ```json fences despite instructions — strip them before parsing
const parseAiJson = (raw) => {
  const cleaned = raw.replace(/```json|```/gi, "").trim();
  return JSON.parse(cleaned);
};

// Tries Gemini first; if Gemini's quota/rate limit is hit, transparently retries with Groq
// so a single provider's daily limit doesn't block the feature entirely.
const runVisionWithFallback = async (prompt, imageFile, toastId) => {
  try {
    return await runGeminiVision(prompt, imageFile);
  } catch (err) {
    if (!err.isRateLimit) throw err;

    toast.loading("Gemini limit reached, retrying with backup AI...", { id: toastId });
    try {
      return await runGroqVision(prompt, imageFile);
    } catch (groqErr) {
      if (groqErr.isRateLimit) {
        const limitErr = new Error(
          "AI usage limit reached on both providers. Please try again later."
        );
        limitErr.isRateLimit = true;
        throw limitErr;
      }
      throw groqErr;
    }
  }
};

const handleAiError = (err, toastId) => {
  console.error("AI extraction error:", err);
  if (err.isRateLimit) {
    toast.error("AI usage limit reached. Please try again in a while.", { id: toastId });
  } else {
    toast.error("AI generation failed. Try again.", { id: toastId });
  }
};

// Reads a product image and drafts a description + key features from what's visible in it
export const generateDescriptionFromImage = async (imageFile, setLoading) => {
  if (!imageFile) {
    toast.error("Please select a product image first.");
    return null;
  }

  setLoading(true);
  toast.loading("Reading image with AI...", { id: "ai-desc" });

  const prompt = `
You are a helpful assistant that returns a single valid JSON object and nothing else.

Look at this product image (packaging, label, on-screen text, or the product itself) and:
- Identify the product and any visible text (brand, model, specs printed on it).
- Write a compelling product description (100-150 words).
- List 4-8 short key features as an array of strings.

Return JSON with exactly these two keys:
{"description": "...", "keyFeatures": ["...", "..."]}

Return valid JSON only — no extra text, no markdown fences.
`;

  try {
    const rawResponse = await runVisionWithFallback(prompt, imageFile, "ai-desc");
    const { description, keyFeatures } = parseAiJson(rawResponse);

    if (!description) {
      toast.error("AI could not extract a description from this image.", { id: "ai-desc" });
      return null;
    }

    toast.success("Description generated from image!", { id: "ai-desc" });
    return {
      description,
      keyFeatures: Array.isArray(keyFeatures) ? keyFeatures : [],
    };
  } catch (err) {
    handleAiError(err, "ai-desc");
    return null;
  } finally {
    setLoading(false);
  }
};

// Reads a spec sheet / label image and turns every spec it finds into a table row
export const extractSpecsFromImage = async (imageFile, setLoading) => {
  if (!imageFile) {
    toast.error("Please select an image first.");
    return null;
  }

  setLoading(true);
  toast.loading("Extracting specifications with AI...", { id: "ai-specs" });

  const prompt = `
You are a helpful assistant that returns a single valid JSON object and nothing else.

Look at this image of a product specification sheet, datasheet, or label and extract
every specification you can find as key-value pairs (e.g. "Voltage" -> "220V", "Weight" -> "1.2kg").
Include as many rows as are actually present in the image — do not limit the count and do not invent values that aren't there.

Return JSON with exactly this shape:
{"specs": [{"key": "...", "value": "..."}, ...]}

Return valid JSON only — no extra text, no markdown fences.
`;

  try {
    const rawResponse = await runVisionWithFallback(prompt, imageFile, "ai-specs");
    const { specs } = parseAiJson(rawResponse);

    if (!Array.isArray(specs) || specs.length === 0) {
      toast.error("AI could not find any specifications in this image.", { id: "ai-specs" });
      return null;
    }

    toast.success(`Extracted ${specs.length} specification(s)!`, { id: "ai-specs" });
    return specs.map((row) => ({
      column1: row.key || "",
      column2: row.value || "",
    }));
  } catch (err) {
    handleAiError(err, "ai-specs");
    return null;
  } finally {
    setLoading(false);
  }
};
