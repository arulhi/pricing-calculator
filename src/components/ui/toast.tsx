"use client"

import { useEffect, useState } from "react"
import { CheckCircle, XCircle, AlertTriangle, X } from "lucide-react"

export type ToastType = "success" | "error" | "warning"

export interface ToastData {
  id: string
  type: ToastType
  message: string
}

let toastListeners: ((toast: ToastData) => void)[] = []

export function showToast(type: ToastType, message: string) {
  const toast: ToastData = { id: crypto.randomUUID(), type, message }
  toastListeners.forEach((fn) => fn(toast))
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([])

  useEffect(() => {
    const handler = (toast: ToastData) => {
      setToasts((prev) => [...prev, toast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, 4000)
    }
    toastListeners.push(handler)
    return () => {
      toastListeners = toastListeners.filter((fn) => fn !== handler)
    }
  }, [])

  const remove = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
  }

  const colors = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
  }

  const iconColors = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-amber-500",
  }

  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = icons[toast.type]
        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg text-sm font-medium min-w-[300px] max-w-md animate-in slide-in-from-right ${colors[toast.type]}`}
          >
            <Icon className={`size-4 shrink-0 ${iconColors[toast.type]}`} />
            <span className="flex-1">{toast.message}</span>
            <button onClick={() => remove(toast.id)} className="shrink-0 opacity-50 hover:opacity-100 transition-opacity">
              <X className="size-3.5" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
