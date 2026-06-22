const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

function getToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("spfio_admin_token")
}

export function setToken(token: string) {
  localStorage.setItem("spfio_admin_token", token)
}

export function clearToken() {
  localStorage.removeItem("spfio_admin_token")
}

export function isAuthenticated(): boolean {
  return !!getToken()
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_URL}${path}`
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }

  const token = getToken()
  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const res = await fetch(url, { ...options, headers, cache: "no-store" })

  if (!res.ok) {
    const body = await res.text()
    throw new ApiError(body || `Request failed with status ${res.status}`, res.status)
  }

  const contentType = res.headers.get("content-type")
  if (res.status === 204 || !contentType || !contentType.includes("application/json")) {
    return undefined as T
  }
  try {
    return await res.json()
  } catch {
    return undefined as T
  }
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
}
