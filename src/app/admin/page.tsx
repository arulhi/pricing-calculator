"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getSubmissions, clearSubmissions, type Submission } from "@/data/submissions"
import { X, Trash2, ChevronRight, Settings, Package, FileText } from "lucide-react"

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    setSubmissions(getSubmissions())
  }, [])

  const handleClear = () => {
    clearSubmissions()
    setSubmissions([])
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage pricing calculator data</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/service-types"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              <Settings className="size-4" />
              Service Types
            </Link>
            <Link
              href="/admin/add-ons"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              <Package className="size-4" />
              Add-ons
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-border/40">
            <div className="flex items-center gap-3">
              <FileText className="size-5 text-primary" />
              <h2 className="text-lg font-bold">Quote Requests</h2>
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{submissions.length} total</span>
            </div>
            {submissions.length > 0 && (
              <button
                onClick={handleClear}
                className="flex items-center gap-1.5 text-xs text-destructive hover:text-destructive/80 transition-colors"
              >
                <Trash2 className="size-3.5" />
                Clear all
              </button>
            )}
          </div>

          {submissions.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="size-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No quote requests yet</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Submissions from the pricing calculator will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 bg-muted/20">
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Date</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Name</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Company</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Service</th>
                    <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                      <td className="p-4 text-muted-foreground whitespace-nowrap">
                        {new Date(s.timestamp).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-medium">{s.formData.firstName} {s.formData.lastName}</td>
                      <td className="p-4 text-muted-foreground">{s.formData.email}</td>
                      <td className="p-4 text-muted-foreground">{s.formData.company || "\u2014"}</td>
                      <td className="p-4">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {s.serviceName}
                        </span>
                      </td>
                      <td className="p-4 text-right font-bold">${s.totalEstimate.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
