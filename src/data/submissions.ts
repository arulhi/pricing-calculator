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
  formData: {
    firstName: string
    lastName: string
    email: string
    company: string
    message: string
  }
}

const STORAGE_KEY = "spfio_submissions"

export function getSubmissions(): Submission[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return []
}

export function addSubmission(submission: Submission) {
  const subs = getSubmissions()
  subs.unshift(submission)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subs))
}

export function clearSubmissions() {
  localStorage.removeItem(STORAGE_KEY)
}
