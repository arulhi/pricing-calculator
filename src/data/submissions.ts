import { api } from "@/lib/api"

export type SubmissionStatus = "APPROVE" | "PROCCESS" | "REJECT"

export interface Submission {
  id: string
  timestamp: number
  serviceType: string
  serviceName: string
  hours: number
  languages: number
  attendees: number
  premiumLanguages: boolean
  selectedAddons: string[]
  totalEstimate: number
  status: SubmissionStatus
  formData: {
    firstName: string
    lastName: string
    email: string
    company: string
    message: string
  }
}

export async function getSubmissions(): Promise<Submission[]> {
  return api.get<Submission[]>("/api/submissions")
}

export async function addSubmission(submission: Omit<Submission, "id" | "timestamp" | "status"> & { status?: SubmissionStatus }): Promise<Submission> {
  return api.post<Submission>("/api/submissions", { ...submission, status: submission.status || "PROCCESS" })
}

export async function deleteSubmission(id: string): Promise<void> {
  await api.delete(`/api/submissions/${id}`)
}

export async function updateSubmission(id: string, data: Partial<Submission>): Promise<Submission> {
  return api.put<Submission>(`/api/submissions/${id}`, data)
}

export async function clearSubmissions(): Promise<void> {
  const subs = await getSubmissions()
  await Promise.all(subs.map((s) => deleteSubmission(s.id).catch(() => null)))
}
