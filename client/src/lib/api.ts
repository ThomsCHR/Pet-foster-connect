export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3003";

export async function apiFetch(path: string, options?: RequestInit) {
  return fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
}
