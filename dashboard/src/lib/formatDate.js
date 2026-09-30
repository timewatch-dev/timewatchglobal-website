// Small dependency-free date helpers for the products list ("Last Updated"
// column + the recency filter). No date-fns/dayjs in this project yet, and
// these are the only two things we need.

const UNITS = [
  { limit: 60, divisor: 1, label: "s" },
  { limit: 3600, divisor: 60, label: "m" },
  { limit: 86400, divisor: 3600, label: "h" },
  { limit: 604800, divisor: 86400, label: "d" },
  { limit: 2629800, divisor: 604800, label: "w" },
  { limit: 31557600, divisor: 2629800, label: "mo" },
];

// "5m ago", "3h ago", "2d ago" ... falls back to a short date past ~1 year.
export function formatRelativeTime(date) {
  if (!date) return "—";
  const then = new Date(date).getTime();
  if (Number.isNaN(then)) return "—";

  const diffSeconds = Math.round((Date.now() - then) / 1000);
  if (diffSeconds < 5) return "just now";

  for (const { limit, divisor, label } of UNITS) {
    if (diffSeconds < limit) {
      return `${Math.floor(diffSeconds / divisor)}${label} ago`;
    }
  }
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// "14 Sep 2026, 3:45 pm" for tooltips/title attributes.
export function formatDateTime(date) {
  if (!date) return "—";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

// Whether `date` falls within the last `hours` hours — backs the "Updated
// recently" badge and the recency filter.
export function isWithinHours(date, hours) {
  if (!date) return false;
  const then = new Date(date).getTime();
  if (Number.isNaN(then)) return false;
  return Date.now() - then <= hours * 3600 * 1000;
}
