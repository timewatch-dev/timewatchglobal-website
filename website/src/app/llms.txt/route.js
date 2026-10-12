import { buildLlmsTxt } from "@/lib/llms";

// Product list comes from the API on every request, same as sitemap.js.
export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(await buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
