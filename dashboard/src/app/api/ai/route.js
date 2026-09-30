import { GoogleGenerativeAI } from "@google/generative-ai";

// Server-only AI proxy: keeps GEMINI_API_KEY / GROQ_API_KEY off the browser.
// Body: { provider: "gemini" | "groq", prompt, image?: { data: <base64>, mimeType } }

export const runtime = "nodejs";

const GEMINI_MODEL = "models/gemini-2.5-flash";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_TEXT_MODEL = "openai/gpt-oss-120b";
// Vision-capable Groq models, tried in order on rate limits. Llama 4 Scout and
// Qwen 3.6 were retired by Groq (404 as of 2026-09); Qwen 3.8 27B accepts images.
const GROQ_VISION_MODELS = [
  "qwen/qwen3.8-27b", // Qwen 3.8 27B
];

// The dashboard's JWT is issued by the backend; ask the backend to validate it
// via any `protect`-guarded route instead of sharing JWT_SECRET with this app.
const isLoggedIn = async (authorization) => {
  if (!authorization?.startsWith("Bearer ")) return false;
  const base = process.env.BACKEND_INTERNAL_URL || "http://127.0.0.1:3005";
  try {
    const res = await fetch(`${base}/api/category`, {
      headers: { Authorization: authorization },
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
};

class ProviderError extends Error {
  constructor(message, provider, isRateLimit) {
    super(message);
    this.provider = provider;
    this.isRateLimit = isRateLimit;
  }
}

// The SDK doesn't expose a typed status code — it bakes it into the message
// (e.g. "[429 Too Many Requests] ... quota ..."), so this is the only reliable signal.
const isRateLimitMessage = (message = "") =>
  /429|quota|rate.?limit|resource_exhausted/i.test(message);

const runGemini = async (prompt, image) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new ProviderError("Gemini API key is not configured (GEMINI_API_KEY).", "gemini", false);
  }
  try {
    const model = new GoogleGenerativeAI(process.env.GEMINI_API_KEY).getGenerativeModel({
      model: GEMINI_MODEL,
    });
    const parts = image ? [prompt, { inlineData: { data: image.data, mimeType: image.mimeType } }] : prompt;
    const result = await model.generateContent(parts);
    return result.response.text();
  } catch (err) {
    throw new ProviderError(err?.message || "Gemini request failed", "gemini", isRateLimitMessage(err?.message));
  }
};

const callGroq = async (messages, model) => {
  if (!process.env.GROQ_API_KEY) {
    throw new ProviderError("Groq API key is not configured (GROQ_API_KEY).", "groq", false);
  }
  const res = await fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({ model, messages, max_completion_tokens: 1024 }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new ProviderError(data?.error?.message || `Groq request failed (${res.status})`, "groq", res.status === 429);
  }
  return data?.choices?.[0]?.message?.content || "";
};

// Walks GROQ_VISION_MODELS in order, moving to the next one only on a rate-limit error.
const runGroq = async (prompt, image) => {
  if (!image) return callGroq([{ role: "user", content: prompt }], GROQ_TEXT_MODEL);

  const messages = [
    {
      role: "user",
      content: [
        { type: "text", text: prompt },
        { type: "image_url", image_url: { url: `data:${image.mimeType};base64,${image.data}` } },
      ],
    },
  ];
  let lastErr;
  for (const model of GROQ_VISION_MODELS) {
    try {
      return await callGroq(messages, model);
    } catch (err) {
      lastErr = err;
      if (!err.isRateLimit) throw err;
    }
  }
  throw lastErr;
};

export async function POST(request) {
  if (!(await isLoggedIn(request.headers.get("authorization")))) {
    return Response.json({ message: "Not authorized" }, { status: 401 });
  }

  const { provider, prompt, image } = await request.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt.trim()) {
    return Response.json({ message: "prompt is required" }, { status: 400 });
  }
  if (image && (typeof image.data !== "string" || typeof image.mimeType !== "string")) {
    return Response.json({ message: "invalid image" }, { status: 400 });
  }

  try {
    const text = provider === "groq" ? await runGroq(prompt, image) : await runGemini(prompt, image);
    return Response.json({ text });
  } catch (err) {
    return Response.json(
      { message: err.message, provider: err.provider, isRateLimit: Boolean(err.isRateLimit) },
      { status: err.isRateLimit ? 429 : 502 },
    );
  }
}
