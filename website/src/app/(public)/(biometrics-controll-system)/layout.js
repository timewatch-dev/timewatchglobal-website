// India city pages are served on timewatchindia.com. Keep them out of
// Google's index on the global site to avoid duplicate content, but let
// crawlers follow their links.
export const metadata = {
  robots: { index: false, follow: true },
};

export default function IndiaCityPagesLayout({ children }) {
  return children;
}
