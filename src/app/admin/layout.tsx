"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Settings, Package, LogOut, ChevronLeft } from "lucide-react"
import { api, isAuthenticated, clearToken, ApiError } from "@/lib/api"

const SIDEBAR_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Service Types", href: "/admin/service-types", icon: Settings },
  { label: "Add-ons", href: "/admin/add-ons", icon: Package },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [authenticated, setAuthenticated] = useState(false)
  const [checking, setChecking] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (pathname === "/admin/login") {
      setChecking(false)
      return
    }
    async function checkAuth() {
      if (!isAuthenticated()) {
        router.replace("/admin/login")
        setChecking(false)
        return
      }
      try {
        await api.get("/api/auth/me")
        setAuthenticated(true)
      } catch {
        clearToken()
        router.replace("/admin/login")
      }
      setChecking(false)
    }
    checkAuth()
  }, [pathname, router])

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!authenticated) return null

  const handleLogout = () => {
    clearToken()
    router.replace("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted/20 flex">
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-card border-r border-border/40 transition-all duration-200 flex flex-col ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="flex items-center h-16 px-4 border-b border-border/40">
          <Link href="/admin" className="flex items-center gap-3 min-w-0">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            {sidebarOpen && <span className="text-sm font-bold truncate">Admin</span>}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto size-7 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors shrink-0"
          >
            <ChevronLeft className={`size-3.5 transition-transform ${!sidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                {sidebarOpen && <span className="truncate">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-border/40">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="size-4 shrink-0" />
            {sidebarOpen && <span className="truncate">Logout</span>}
          </button>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-200 ${sidebarOpen ? "ml-60" : "ml-16"}`}>
        {children}
      </main>
    </div>
  )
}
