import { api } from "@/lib/api"

export interface ServiceType {
  id: string
  name: string
  desc: string
  rate: number
  unit: string
}

export const DEFAULT_SERVICE_TYPES: ServiceType[] = [
  { id: "live-events", name: "Live Eventssss", desc: "Real-time captions, translations & streaming", rate: 150, unit: "hour" },
  { id: "content", name: "Content Translation", desc: "Audio, video, slides & documents", rate: 100, unit: "hour" },
  { id: "conversations", name: "Conversations", desc: "Multilingual meetings & discussions", rate: 75, unit: "hour" },
  { id: "multiple", name: "Multiple Services", desc: "Combination of services for your needs", rate: 0, unit: "hour" },
]

export async function getServiceTypes(): Promise<ServiceType[]> {
  try {
    return await api.get<ServiceType[]>("/api/service-types")
  } catch {
    return []
  }
}

export async function createServiceType(data: Omit<ServiceType, "id"> & { id: string }): Promise<ServiceType> {
  return api.post<ServiceType>("/api/service-types", data)
}

export async function updateServiceType(id: string, data: ServiceType): Promise<ServiceType> {
  return api.put<ServiceType>(`/api/service-types/${encodeURIComponent(id)}`, data)
}

export async function deleteServiceType(id: string): Promise<void> {
  await api.delete(`/api/service-types/${encodeURIComponent(id)}`)
}

export async function resetServiceTypes(): Promise<void> {
  const promises = DEFAULT_SERVICE_TYPES.map((st) =>
    api.post<ServiceType>("/api/service-types", st).catch(() => null)
  )
  await Promise.all(promises)
}
