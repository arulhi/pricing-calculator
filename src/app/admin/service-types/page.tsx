"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getServiceTypes, createServiceType, updateServiceType, deleteServiceType, type ServiceType } from "@/data/service-types"
import { ArrowLeft, Plus, Trash2, Pencil, X, AlertTriangle } from "lucide-react"
import { showToast } from "@/components/ui/toast"

export default function AdminServiceTypes() {
  const [types, setTypes] = useState<ServiceType[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<{ type: "add" | "edit"; id?: string; index?: number } | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<{ index: number; id: string } | null>(null)
  const [form, setForm] = useState({ id: "", name: "", desc: "", rate: "", unit: "" })
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    getServiceTypes().then(setTypes).finally(() => setLoading(false))
  }, [])

  const openAdd = () => {
    setForm({ id: "", name: "", desc: "", rate: "0", unit: "hour" })
    setModal({ type: "add" })
  }

  const openEdit = (i: number) => {
    const t = types[i]
    setForm({ id: t.id, name: t.name, desc: t.desc, rate: String(t.rate), unit: t.unit })
    setModal({ type: "edit", id: t.id, index: i })
  }

  const handleSave = async () => {
    setSaving(true)
    const item = {
      id: form.id.replace(/\s+/g, "-"),
      name: form.name,
      desc: form.desc,
      rate: parseInt(form.rate) || 0,
      unit: form.unit,
    }
    try {
      if (modal?.type === "add") {
        await createServiceType(item)
      } else if (modal?.id) {
        await updateServiceType(modal.id, item)
      }
      const updatedList = await getServiceTypes()
      setTypes(updatedList)
      setModal(null)
      showToast("success", modal?.type === "add" ? "Service type added" : "Service type updated")
    } catch {
      showToast("error", "Failed to save service type")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirmDelete) return
    setDeleting(true)
    try {
      await deleteServiceType(confirmDelete.id)
      getServiceTypes().then(setTypes)
      setConfirmDelete(null)
      showToast("success", "Service type deleted")
    } catch {
      showToast("error", "Failed to delete service type")
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
              <ArrowLeft className="size-4" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Service Types</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage the service options in the pricing calculator</p>
            </div>
          </div>
          <button onClick={openAdd} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
            <Plus className="size-3.5" />
            Add Service Type
          </button>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/20">
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">ID</th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Name</th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Description</th>
                <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Rate</th>
                <th className="text-center p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Unit</th>
                <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="p-12 text-center text-sm text-muted-foreground">Loading...</td></tr>
              ) : types.length === 0 ? (
                <tr><td colSpan={6} className="p-12 text-center text-sm text-muted-foreground">No service types yet</td></tr>
              ) : types.map((t, i) => (
                <tr key={t.id} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                  <td className="p-4 text-xs font-mono text-muted-foreground">{t.id}</td>
                  <td className="p-4 font-medium">{t.name}</td>
                  <td className="p-4 text-muted-foreground text-xs">{t.desc}</td>
                  <td className="p-4 text-right font-bold">{t.rate > 0 ? `$${t.rate}` : "Custom"}</td>
                  <td className="p-4 text-center text-muted-foreground text-xs">{t.unit}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => openEdit(i)} className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
                        <Pencil className="size-3.5" />
                      </button>
                      <button onClick={() => setConfirmDelete({ index: i, id: t.id })} className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-destructive/10 hover:border-destructive/30 transition-colors">
                        <Trash2 className="size-3.5 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModal(null)} />
          <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border/50 shadow-2xl p-6">
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
              <X className="size-4" />
            </button>
            <h2 className="text-lg font-bold mb-6">{modal.type === "add" ? "Add Service Type" : "Edit Service Type"}</h2>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">ID</label>
                <input value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value.replace(/\s+/g, "-") })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="service-id" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Service Name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Description</label>
                <input value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Short description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Rate ($)</label>
                  <input type="number" min={0} value={form.rate} onChange={(e) => setForm({ ...form, rate: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="0" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Unit</label>
                  <input value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="hour" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} disabled={saving} className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                  {saving ? "Saving..." : "Save"}
                </button>
                <button onClick={() => setModal(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
          <div className="relative w-full max-w-sm bg-card rounded-2xl border border-border/50 shadow-2xl p-6 text-center">
            <div className="mx-auto size-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertTriangle className="size-6 text-destructive" />
            </div>
            <h2 className="text-lg font-bold mb-2">Delete Service Type</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Are you sure you want to delete <strong>{types[confirmDelete.index]?.name}</strong>? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={handleDelete} disabled={deleting} className="flex-1 h-11 rounded-lg bg-destructive text-white text-sm font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50">{deleting ? "Deleting..." : "Yes, Delete"}</button>
              <button onClick={() => setConfirmDelete(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
