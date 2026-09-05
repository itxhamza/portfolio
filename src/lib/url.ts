/**
 * Prefix an internal path with the configured `base` so links work when the
 * site is served from a sub-path (e.g. GitHub Pages: /portfolio/).
 * External URLs, mailto:, and #fragments are returned untouched.
 */
export function withBase(path = "/"): string {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL; // normalized, e.g. "/portfolio/" or "/"
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}` || "/";
}

/** True when `href` matches the current pathname (base-aware). */
export function isActive(current: string, href: string): boolean {
  const norm = (s: string) => (s.length > 1 ? s.replace(/\/+$/, "") : s);
  const c = norm(current);
  const t = norm(withBase(href));
  return href === "/" ? c === t : c === t || c.startsWith(t + "/");
}
