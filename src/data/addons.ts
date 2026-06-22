import { api } from "@/lib/api"

export interface Addon {
  id: string
  name: string
  desc: string
  price: number
  unit: string
}

export const DEFAULT_ADDONS: Addon[] = [
  { id: "text-to-speech", name: "Text-to-Speech", desc: "AI voice output for translations", price: 50, unit: "event" },
  { id: "interpreter", name: "Professional Interpreter", desc: "Human interpreter for live supervision", price: 200, unit: "hour" },
  { id: "ai-customization", name: "AI Customization", desc: "Train AI on your terminology & style", price: 500, unit: "project" },
  { id: "support", name: "On-Call Support", desc: "Dedicated technician during your event", price: 150, unit: "event" },
  { id: "polls", name: "Multilingual Polls", desc: "Interactive polls in multiple languages", price: 25, unit: "event" },
]

export async function getAddons(): Promise<Addon[]> {
  try {
    return await api.get<Addon[]>("/api/addons")
  } catch {
    return []
  }
}

export async function createAddon(data: Omit<Addon, "id"> & { id: string }): Promise<Addon> {
  return api.post<Addon>("/api/addons", data)
}

export async function updateAddon(id: string, data: Addon): Promise<Addon> {
  return api.put<Addon>(`/api/addons/${encodeURIComponent(id)}`, data)
}

export async function deleteAddon(id: string): Promise<void> {
  await api.delete(`/api/addons/${encodeURIComponent(id)}`)
}

export async function resetAddons(): Promise<void> {
  const promises = DEFAULT_ADDONS.map((a) =>
    api.post<Addon>("/api/addons", a).catch(() => null)
  )
  await Promise.all(promises)
}
