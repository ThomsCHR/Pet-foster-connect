export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3003";

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function apiFetch(path: string, options?: RequestInit) {
  const isFormData = options?.body instanceof FormData;
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: "include",
    headers: isFormData ? options?.headers : { "Content-Type": "application/json", ...options?.headers },
  });

  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new ApiError(res.status, json.message ?? `Erreur ${res.status}`);
  }

  return res;
}
