"use client"

import { useState, useEffect, useMemo, Fragment } from "react"
import Link from "next/link"
import { getSubmissions, deleteSubmission, updateSubmission, clearSubmissions, type Submission, type SubmissionStatus } from "@/data/submissions"
import { Trash2, Settings, Package, DollarSign, Globe, Clock, Users, X, AlertTriangle, Pencil, CheckSquare, Square, Eye, ChevronDown } from "lucide-react"
import { showToast } from "@/components/ui/toast"

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [confirmBulkDelete, setConfirmBulkDelete] = useState(false)
  const [editTarget, setEditTarget] = useState<Submission | null>(null)
  const [editStatus, setEditStatus] = useState<SubmissionStatus>("PROCCESS")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    setLoading(true)
    try {
      const data = await getSubmissions()
      setSubmissions(data)
    } finally {
      setLoading(false)
    }
  }

  const stats = useMemo(() => {
    if (submissions.length === 0) return null
    const total = submissions.reduce((a, s) => a + s.totalEstimate, 0)
    const avgLang = Math.round(submissions.reduce((a, s) => a + s.languages, 0) / submissions.length)
    const avgDur = Math.round(submissions.reduce((a, s) => a + s.hours, 0) / submissions.length)
    const avgAtt = Math.round(submissions.reduce((a, s) => a + s.attendees, 0) / submissions.length)
    return { total, avgLang, avgDur, avgAtt }
  }, [submissions])

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleSelectAll = () => {
    if (selectedIds.size === submissions.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(submissions.map((s) => s.id)))
    }
  }

  const [deleting, setDeleting] = useState(false)

  const handleDeleteOne = async () => {
    if (!confirmDelete) return
    setDeleting(true)
    try {
      await deleteSubmission(confirmDelete)
      setSubmissions((prev) => prev.filter((s) => s.id !== confirmDelete))
      setSelectedIds((prev) => { const n = new Set(prev); n.delete(confirmDelete); return n })
      showToast("success", "Submission deleted")
    } catch {
      showToast("error", "Failed to delete submission")
    } finally {
      setDeleting(false)
      setConfirmDelete(null)
    }
  }

  const handleBulkDelete = async () => {
    setDeleting(true)
    try {
      await Promise.all(Array.from(selectedIds).map((id) => deleteSubmission(id).catch(() => null)))
      setSubmissions((prev) => prev.filter((s) => !selectedIds.has(s.id)))
      showToast("success", `${selectedIds.size} submissions deleted`)
      setSelectedIds(new Set())
    } catch {
      showToast("error", "Failed to delete some submissions")
    } finally {
      setConfirmBulkDelete(false)
      setDeleting(false)
    }
  }

  const openEdit = (s: Submission) => {
    setEditTarget(s)
    setEditStatus(s.status)
  }

  const handleEditSave = async () => {
    if (!editTarget) return
    setSaving(true)
    try {
      const updated = await updateSubmission(editTarget.id, { status: editStatus })
      setSubmissions((prev) => prev.map((s) => (s.id === editTarget.id ? updated : s)))
      setEditTarget(null)
      showToast("success", "Status updated")
    } catch {
      showToast("error", "Failed to update status")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-6">
        <div className="flex items-center justify-between">
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

        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-border/50 bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Total Estimates</span>
              </div>
              <div className="text-2xl font-black">${stats.total.toLocaleString()}</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Avg Languages</span>
              </div>
              <div className="text-2xl font-black">{stats.avgLang}</div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Avg Duration</span>
              </div>
              <div className="text-2xl font-black">{stats.avgDur} <span className="text-sm font-normal text-muted-foreground">hrs</span></div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="size-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Avg Attendees</span>
              </div>
              <div className="text-2xl font-black">{stats.avgAtt.toLocaleString()}</div>
            </div>
          </div>
        )}

          <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-border/40">
              <div className="flex items-center gap-3">
                <Package className="size-5 text-primary" />
              <h2 className="text-lg font-bold">Quote Requests</h2>
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{loading ? "..." : `${submissions.length} total`}</span>
            </div>
            <div className="flex items-center gap-2">
              {selectedIds.size > 0 && (
                <button
                  onClick={() => setConfirmBulkDelete(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive text-white text-xs font-medium hover:bg-destructive/90 transition-colors"
                >
                  <Trash2 className="size-3.5" />
                  Delete ({selectedIds.size})
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-sm text-muted-foreground">Loading...</div>
          ) : submissions.length === 0 ? (
            <div className="p-12 text-center">
              <Eye className="size-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No quote requests yet</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Submissions from the pricing calculator will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/40 bg-muted/20">
                    <th className="w-10 p-4">
                      <button onClick={toggleSelectAll} className="flex items-center justify-center">
                        {selectedIds.size === submissions.length ? (
                          <CheckSquare className="size-4 text-primary" />
                        ) : (
                          <Square className="size-4 text-muted-foreground" />
                        )}
                      </button>
                    </th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Date</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Name</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Company</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Service</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Details</th>
                    <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Estimate</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
                    <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider w-24">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <Fragment key={s.id}>
                    <tr className={`border-b border-border/20 transition-colors ${selectedIds.has(s.id) ? "bg-primary/5" : expandedIds.has(s.id) ? "bg-muted/10" : "hover:bg-muted/10"}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                        <button onClick={() => setExpandedIds((prev) => { const n = new Set(prev); if (n.has(s.id)) n.delete(s.id); else n.add(s.id); return n })} className="flex items-center justify-center size-6 rounded hover:bg-muted/50 transition-colors">
                          <ChevronDown className={`size-3.5 text-muted-foreground transition-transform ${expandedIds.has(s.id) ? "rotate-180" : ""}`} />
                        </button>
                        <button onClick={() => toggleSelect(s.id)} className="flex items-center justify-center">
                          {selectedIds.has(s.id) ? (
                            <CheckSquare className="size-4 text-primary" />
                          ) : (
                            <Square className="size-4 text-muted-foreground/50" />
                          )}
                        </button>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground whitespace-nowrap text-xs">
                        {new Date(s.timestamp).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-medium whitespace-nowrap">{s.formData.firstName} {s.formData.lastName}</td>
                      <td className="p-4 text-muted-foreground text-xs">{s.formData.email}</td>
                      <td className="p-4 text-muted-foreground text-xs">{s.formData.company || "\u2014"}</td>
                      <td className="p-4">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {s.serviceName}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-muted-foreground">
                        {s.hours}hr &middot; {s.languages}lang{s.languages > 1 ? "s" : ""} &middot; {s.attendees.toLocaleString()} att
                      </td>
                      <td className="p-4 text-right font-bold">${s.totalEstimate.toLocaleString()}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-4 py-2 rounded-full font-medium ${
                          s.status === "APPROVE" ? "bg-green-100 text-green-700" :
                          s.status === "REJECT" ? "bg-red-100 text-red-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openEdit(s)}
                            className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
                            title="Edit"
                          >
                            <Pencil className="size-3.5" />
                          </button>
                          <button
                            onClick={() => setConfirmDelete(s.id)}
                            
                            className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-destructive/10 hover:border-destructive/30 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="size-3.5 text-destructive" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedIds.has(s.id) && (
                      <tr className="border-b border-border/20 bg-muted/5">
                      <td colSpan={10} className="p-0">
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIds.has(s.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="px-4 pb-4 pl-14">
                            <div className="border-t border-border/20 pt-3">
                              <table className="w-full text-xs">
                                <thead>
                                  <tr className="border-b border-border/10">
                                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground uppercase tracking-wider">Premium Languages</th>
                                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground uppercase tracking-wider">Duration</th>
                                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground uppercase tracking-wider">Languages</th>
                                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground uppercase tracking-wider">Attendees</th>
                                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground uppercase tracking-wider">Add-ons</th>
                                    <th className="text-left py-1.5 font-semibold text-muted-foreground uppercase tracking-wider">Message</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="py-2 pr-3">
                                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                        s.premiumLanguages ? "bg-green-100 text-green-700" : "bg-muted-foreground/10 text-muted-foreground"
                                      }`}>{s.premiumLanguages ? "Yes" : "No"}</span>
                                    </td>
                                    <td className="py-2 pr-3 font-medium text-foreground">{s.hours} hr</td>
                                    <td className="py-2 pr-3 font-medium text-foreground">{s.languages}</td>
                                    <td className="py-2 pr-3 font-medium text-foreground">{s.attendees.toLocaleString()}</td>
                                    <td className="py-2 pr-3">
                                      {s.selectedAddons.length > 0 ? (
                                        <div className="flex flex-wrap gap-1">
                                          {s.selectedAddons.map((a) => (
                                            <span key={a} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-medium border border-primary/20 whitespace-nowrap">{a}</span>
                                          ))}
                                        </div>
                                      ) : (
                                        <span className="text-muted-foreground/50">\u2014</span>
                                      )}
                                    </td>
                                    <td className="py-2">
                                      {s.formData.message ? (
                                        <p className="text-foreground/80 leading-relaxed line-clamp-2">{s.formData.message}</p>
                                      ) : (
                                        <span className="text-muted-foreground/50">\u2014</span>
                                      )}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Delete single confirmation */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
          <div className="relative w-full max-w-sm bg-card rounded-2xl border border-border/50 shadow-2xl p-6 text-center">
            <div className="mx-auto size-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertTriangle className="size-6 text-destructive" />
            </div>
            <h2 className="text-lg font-bold mb-2">Delete Submission</h2>
            <p className="text-sm text-muted-foreground mb-6">Are you sure you want to delete this submission? This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={handleDeleteOne} disabled={deleting} className="flex-1 h-11 rounded-lg bg-destructive text-white text-sm font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50">
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button onClick={() => setConfirmDelete(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk delete confirmation */}
      {confirmBulkDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setConfirmBulkDelete(false)} />
          <div className="relative w-full max-w-sm bg-card rounded-2xl border border-border/50 shadow-2xl p-6 text-center">
            <div className="mx-auto size-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertTriangle className="size-6 text-destructive" />
            </div>
            <h2 className="text-lg font-bold mb-2">Delete {selectedIds.size} Submissions</h2>
            <p className="text-sm text-muted-foreground mb-6">Are you sure you want to delete {selectedIds.size} submissions? This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={handleBulkDelete} disabled={deleting} className="flex-1 h-11 rounded-lg bg-destructive text-white text-sm font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50">
                {deleting ? "Deleting..." : "Yes, Delete All"}
              </button>
              <button onClick={() => setConfirmBulkDelete(false)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editTarget && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setEditTarget(null)} />
          <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border/50 shadow-2xl p-6">
            <button onClick={() => setEditTarget(null)} className="absolute top-4 right-4 size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
              <X className="size-4" />
            </button>
            <h2 className="text-lg font-bold mb-6">Edit Submission Status</h2>
            <div className="space-y-4">
              <div className="text-xs text-muted-foreground bg-muted/30 rounded-lg p-3 space-y-1">
                <div className="flex justify-between"><span>Name</span><span className="font-medium text-foreground">{editTarget.formData.firstName} {editTarget.formData.lastName}</span></div>
                <div className="flex justify-between"><span>Service</span><span className="font-medium text-foreground">{editTarget.serviceName}</span></div>
                <div className="flex justify-between"><span>Estimate</span><span className="font-medium text-foreground">${editTarget.totalEstimate.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Date</span><span className="font-medium text-foreground">{new Date(editTarget.timestamp).toLocaleDateString()}</span></div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Status</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as SubmissionStatus)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="PROCCESS">PROCCESS</option>
                    <option value="APPROVE">APPROVE</option>
                    <option value="REJECT">REJECT</option>
                  </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleEditSave} disabled={saving} className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                  {saving ? "Saving..." : "Save"}
                </button>
                <button onClick={() => setEditTarget(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
