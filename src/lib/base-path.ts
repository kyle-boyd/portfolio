/** Base path for GitHub Pages (e.g. /portfolio). Empty in dev. */
export const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

/** Use for img src and other asset URLs so they work on GitHub Pages. */
export function assetUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}
