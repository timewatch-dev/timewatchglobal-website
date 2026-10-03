// These solution pages are near-copies of the ones on timewatchindia.com, and
// Google was already choosing the India URL as the canonical for them even with
// a self-referencing canonical here. Keep them out of the index on the global
// site (they stay reachable and crawlable) until global-specific versions exist.
export const metadata = {
  robots: { index: false, follow: true },
};

export default function SolutionsCopyLayout({ children }) {
  return children;
}
