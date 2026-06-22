export interface ServiceType {
  id: string
  name: string
  desc: string
  rate: number
  unit: string
}

const STORAGE_KEY = "spfio_service_types"

export const DEFAULT_SERVICE_TYPES: ServiceType[] = [
  { id: "live-events", name: "Live Events", desc: "Real-time captions, translations & streaming", rate: 150, unit: "hour" },
  { id: "content", name: "Content Translation", desc: "Audio, video, slides & documents", rate: 100, unit: "hour" },
  { id: "conversations", name: "Conversations", desc: "Multilingual meetings & discussions", rate: 75, unit: "hour" },
  { id: "multiple", name: "Multiple Services", desc: "Combination of services for your needs", rate: 0, unit: "hour" },
]

export function getServiceTypes(): ServiceType[] {
  if (typeof window === "undefined") return DEFAULT_SERVICE_TYPES
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return DEFAULT_SERVICE_TYPES
}

export function saveServiceTypes(types: ServiceType[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(types))
}

export function resetServiceTypes() {
  localStorage.removeItem(STORAGE_KEY)
}
