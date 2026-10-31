import styles from "./SolutionShell.module.css";

// One white card of page content. Headings, paragraphs, lists and links inside it are styled by
// SolutionShell.module.css, so page markup stays plain HTML.
export function SolutionCard({ children, className = "" }) {
  return <section className={`${styles.card} ${className}`}>{children}</section>;
}

// Image block at the top of a card (give it the height classes, e.g. "h-[260px] md:h-[420px]").
export function SolutionMedia({ className = "", children }) {
  return <div className={`${styles.media} ${className}`}>{children}</div>;
}
