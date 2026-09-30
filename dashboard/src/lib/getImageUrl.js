// The backend returns fully-qualified URLs in product lists but relative
// paths ("/uploads/...") in single-product responses, so relative paths are
// prefixed with the media host here. Stored values stay relative — this only
// affects what the dashboard displays/links to.
// A freshly-selected File the user hasn't uploaded yet is previewed locally.
const MEDIA_URL = (process.env.NEXT_PUBLIC_MEDIA_URL || "https://www.timewatchglobal.com").replace(/\/$/, "");

export const getImageUrl = (image) => {
  if (!image) return "";

  if (typeof image === "string") {
    return image.startsWith("/") ? `${MEDIA_URL}${image}` : image;
  }

  return URL.createObjectURL(image);
};
