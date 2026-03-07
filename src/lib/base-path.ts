/** Base path for GitHub Pages (e.g. /portfolio). Empty for custom domain or dev. */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/portfolio" : "");

/** Use for img src and other asset URLs so they work on GitHub Pages. */
export function assetUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}
