export interface Addon {
  id: string
  name: string
  desc: string
  price: number
  unit: string
}

const STORAGE_KEY = "spfio_addons"

export const DEFAULT_ADDONS: Addon[] = [
  { id: "text-to-speech", name: "Text-to-Speech", desc: "AI voice output for translations", price: 50, unit: "event" },
  { id: "interpreter", name: "Professional Interpreter", desc: "Human interpreter for live supervision", price: 200, unit: "hour" },
  { id: "ai-customization", name: "AI Customization", desc: "Train AI on your terminology & style", price: 500, unit: "project" },
  { id: "support", name: "On-Call Support", desc: "Dedicated technician during your event", price: 150, unit: "event" },
  { id: "polls", name: "Multilingual Polls", desc: "Interactive polls in multiple languages", price: 25, unit: "event" },
]

export function getAddons(): Addon[] {
  if (typeof window === "undefined") return DEFAULT_ADDONS
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return DEFAULT_ADDONS
}

export function saveAddons(addons: Addon[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(addons))
}

export function resetAddons() {
  localStorage.removeItem(STORAGE_KEY)
}
