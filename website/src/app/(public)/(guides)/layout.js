import BodyFontScope from "@/components/BodyFontScope";

// Body text in this route group uses Open Sans, headings keep the site font (see components/BodyFontScope).
export default function Layout({ children }) {
  return <BodyFontScope>{children}</BodyFontScope>;
}
