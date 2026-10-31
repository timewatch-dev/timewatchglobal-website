import { Open_Sans, Rajdhani } from "next/font/google";
import styles from "./BodyFontScope.module.css";

// Shared font scope for the static page groups (currently (guides)).
// Body text (paragraphs, lists, tables, links, buttons) uses Open Sans; headings (h1-h6) keep the site heading font (Rajdhani).
// Change the fonts here (and in BodyFontScope.module.css) and every page in those groups follows.
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-scope-body",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-scope-heading",
});

export default function BodyFontScope({ children }) {
  return (
    <div className={`${styles.root} ${openSans.variable} ${rajdhani.variable}`}>
      {children}
    </div>
  );
}
