// Browser-side caller for the server AI proxy (src/app/api/ai/route.js).
// API keys live only on the server; the dashboard login token authorizes the call.

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const callAI = async (provider, prompt, imageFile) => {
  const image = imageFile
    ? { data: await fileToBase64(imageFile), mimeType: imageFile.type }
    : undefined;
  const token = typeof window !== "undefined" ? localStorage.getItem("userLogin") : null;

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ provider, prompt, image }),
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = new Error(data?.message || `${provider} request failed (${res.status})`);
    err.provider = data?.provider || provider;
    err.isRateLimit = Boolean(data?.isRateLimit) || res.status === 429;
    throw err;
  }
  return data.text || "";
};
