"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("spfio_admin_auth", "true")
      router.replace("/admin")
    } else {
      setError(true)
      setUsername("")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="size-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setError(false)
                }}
                className={`w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  error ? "border-destructive ring-2 ring-destructive/20" : "border-border"
                }`}
                placeholder="Enter username"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                }}
                className={`w-full h-10 px-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  error ? "border-destructive ring-2 ring-destructive/20" : "border-border"
                }`}
                placeholder="Enter admin password"
              />
              {error && (
                <p className="text-xs text-destructive">Invalid username or password. Try again.</p>
              )}
            </div>
            <Button type="submit" className="w-full h-11 text-base">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
