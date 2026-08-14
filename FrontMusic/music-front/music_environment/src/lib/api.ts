const DEFAULT_API_BASE = "http://127.0.0.1:8000";

function normalizeBase(base: string): string {
  return base.replace(/\/+$/, "");
}

function normalizePath(path: string): string {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function apiUrl(path: string): string {
  const envBase = process.env.NEXT_PUBLIC_API_URL?.trim();
  const base = normalizeBase(envBase || DEFAULT_API_BASE);
  const safePath = normalizePath(path);
  return `${base}${safePath}`;
}
