"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getAddons, saveAddons, resetAddons, DEFAULT_ADDONS, type Addon } from "@/data/addons"
import { ArrowLeft, Plus, Trash2, Pencil, RotateCcw, X, AlertTriangle } from "lucide-react"
import { showToast } from "@/components/ui/toast"

export default function AdminAddons() {
  const [addons, setAddons] = useState<Addon[]>([])
  const [modal, setModal] = useState<{ type: "add" | "edit"; index?: number } | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)
  const [form, setForm] = useState({ id: "", name: "", desc: "", price: "", unit: "" })

  useEffect(() => {
    setAddons(getAddons())
  }, [])

  const openAdd = () => {
    setForm({ id: "", name: "", desc: "", price: "0", unit: "event" })
    setModal({ type: "add" })
  }

  const openEdit = (i: number) => {
    const a = addons[i]
    setForm({ id: a.id, name: a.name, desc: a.desc, price: String(a.price), unit: a.unit })
    setModal({ type: "edit", index: i })
  }

  const handleSave = () => {
    const item: Addon = {
      id: form.id.replace(/\s+/g, "-"),
      name: form.name,
      desc: form.desc,
      price: parseInt(form.price) || 0,
      unit: form.unit,
    }
    let next: Addon[]
    if (modal?.type === "add") {
      next = [...addons, item]
    } else {
      next = addons.map((a, i) => (i === modal?.index ? item : a))
    }
    setAddons(next)
    saveAddons(next)
    setModal(null)
    showToast("success", modal?.type === "add" ? "Add-on added" : "Add-on updated")
  }

  const handleDelete = () => {
    if (confirmDelete === null) return
    const next = addons.filter((_, i) => i !== confirmDelete)
    setAddons(next)
    saveAddons(next)
    setConfirmDelete(null)
    showToast("success", "Add-on deleted")
  }

  const handleReset = () => {
    resetAddons()
    setAddons(DEFAULT_ADDONS)
    showToast("success", "Add-ons reset to defaults")
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
              <h1 className="text-3xl font-bold tracking-tight">Optional Add-ons</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage the add-on options in the pricing calculator</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleReset} className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-xs font-medium hover:bg-muted/50 transition-colors">
              <RotateCcw className="size-3.5" />
              Reset
            </button>
            <button onClick={openAdd} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
              <Plus className="size-3.5" />
              Add Add-on
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-muted/20">
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">ID</th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Name</th>
                <th className="text-left p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Description</th>
                <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Price</th>
                <th className="text-center p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Unit</th>
                <th className="text-right p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addons.map((a, i) => (
                <tr key={a.id} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                  <td className="p-4 text-xs font-mono text-muted-foreground">{a.id}</td>
                  <td className="p-4 font-medium">{a.name}</td>
                  <td className="p-4 text-muted-foreground text-xs">{a.desc}</td>
                  <td className="p-4 text-right font-bold">${a.price}</td>
                  <td className="p-4 text-center text-muted-foreground text-xs">{a.unit}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => openEdit(i)} className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
                        <Pencil className="size-3.5" />
                      </button>
                      <button onClick={() => setConfirmDelete(i)} className="size-8 rounded-lg border border-border flex items-center justify-center hover:bg-destructive/10 hover:border-destructive/30 transition-colors">
                        <Trash2 className="size-3.5 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {addons.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-sm text-muted-foreground">No add-ons yet</td>
                </tr>
              )}
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
            <h2 className="text-lg font-bold mb-6">{modal.type === "add" ? "Add Add-on" : "Edit Add-on"}</h2>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">ID</label>
                <input value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value.replace(/\s+/g, "-") })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="addon-id" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Add-on Name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Description</label>
                <input value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Short description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Price ($)</label>
                  <input type="number" min={0} value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="0" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Unit</label>
                  <input value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="event" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">Save</button>
                <button onClick={() => setModal(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
          <div className="relative w-full max-w-sm bg-card rounded-2xl border border-border/50 shadow-2xl p-6 text-center">
            <div className="mx-auto size-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertTriangle className="size-6 text-destructive" />
            </div>
            <h2 className="text-lg font-bold mb-2">Delete Add-on</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Are you sure you want to delete <strong>{addons[confirmDelete]?.name}</strong>? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={handleDelete} className="flex-1 h-11 rounded-lg bg-destructive text-destructive-foreground text-sm font-medium hover:bg-destructive/90 transition-colors text-white">Yes, Delete</button>
              <button onClick={() => setConfirmDelete(null)} className="flex-1 h-11 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted/50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
