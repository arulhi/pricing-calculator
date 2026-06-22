"use client"

import { useState } from "react"
import { Check, Plus, Minus, HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SERVICE_TYPES = [
  { id: "live-events", name: "Live Events", desc: "Real-time captions, translations & streaming", rate: 150, unit: "hour" },
  { id: "content", name: "Content Translation", desc: "Audio, video, slides & documents", rate: 100, unit: "hour" },
  { id: "conversations", name: "Conversations", desc: "Multilingual meetings & discussions", rate: 75, unit: "hour" },
  { id: "multiple", name: "Multiple Services", desc: "Combination of services for your needs", rate: 500, unit: "hour" },
]

const PREMIUM_LANG_RATE = 25
const BASE_LANGUAGES = 2
const BASE_ATTENDEES = 100

const ADDONS = [
  { id: "text-to-speech", name: "Text-to-Speech", desc: "AI voice output for translations", price: 50, unit: "event" },
  { id: "interpreter", name: "Professional Interpreter", desc: "Human interpreter for live supervision", price: 200, unit: "hour" },
  { id: "ai-customization", name: "AI Customization", desc: "Train AI on your terminology & style", price: 500, unit: "project" },
  { id: "support", name: "On-Call Support", desc: "Dedicated technician during your event", price: 150, unit: "event" },
  { id: "polls", name: "Multilingual Polls", desc: "Interactive polls in multiple languages", price: 25, unit: "event" },
]

export default function PricingCalculator() {
  const [serviceType, setServiceType] = useState("live-events")
  const [hours, setHours] = useState(2)
  const [languages, setLanguages] = useState(2)
  const [attendees, setAttendees] = useState(100)
  const [premiumLanguages, setPremiumLanguages] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceType: "",
    message: "",
  })

  const service = SERVICE_TYPES.find((s) => s.id === serviceType)!

  const baseCost = service.rate * hours
  const additionalLanguages = Math.max(0, languages - BASE_LANGUAGES)
  const languageCost = additionalLanguages * 25 * hours
  const premiumCost = premiumLanguages ? PREMIUM_LANG_RATE * hours : 0
  const addonCost = selectedAddons.reduce((acc, id) => {
    const addon = ADDONS.find((a) => a.id === id)
    return acc + (addon?.price || 0)
  }, 0)

  const totalEstimate = baseCost + languageCost + premiumCost + addonCost

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const resetForm = () => {
    setFormData({ firstName: "", lastName: "", email: "", company: "", serviceType: "", message: "" })
  }

  const openQuoteForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      serviceType: "",
      message: "",
    })
    setShowQuoteForm(true)
  }

  const closeQuoteForm = () => {
    resetForm()
    setShowQuoteForm(false)
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Calculate your pricing
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Build your perfect multilingual solution. Only pay for what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Service Type
            </h3>
            <p className="text-xs text-muted-foreground -mt-4">Choose the type of translation service you need</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {SERVICE_TYPES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setServiceType(st.id)}
                  className={cn(
                    "text-left p-4 rounded-xl border-2 transition-all",
                    serviceType === st.id
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border/50 hover:border-border bg-card"
                  )}
                >
                  <div className="font-semibold text-sm">{st.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{st.desc}</div>
                  <div className="text-lg font-bold mt-2 text-primary">
                    {st.rate > 0 ? `$${st.rate}` : "Custom"}<span className="text-xs text-muted-foreground font-normal">{st.rate > 0 ? `/${st.unit}` : ""}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Duration</h3>
            <p className="text-xs text-muted-foreground -mt-4">Event or session length</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setHours(Math.max(1, hours - 1))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <Minus className="size-4" />
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min={1}
                  max={24}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 hr</span>
                  <span className="font-bold text-foreground">{hours} hrs</span>
                  <span>24 hrs</span>
                </div>
              </div>
              <button
                onClick={() => setHours(Math.min(24, hours + 1))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Languages</h3>
            <p className="text-xs text-muted-foreground -mt-4">Target languages ({BASE_LANGUAGES} included)</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguages(Math.max(1, languages - 1))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <Minus className="size-4" />
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={languages}
                  onChange={(e) => setLanguages(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 lang</span>
                  <span className="font-bold text-foreground">{languages} langs</span>
                  <span>20 langs</span>
                </div>
              </div>
              <button
                onClick={() => setLanguages(Math.min(20, languages + 1))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Attendees / Connections</h3>
            <p className="text-xs text-muted-foreground -mt-4">Number of viewers or participants ({BASE_ATTENDEES} included)</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setAttendees(Math.max(1, attendees - 100))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors shrink-0"
              >
                <Minus className="size-4" />
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min={1}
                  max={10000}
                  step={100}
                  value={attendees}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex items-center justify-between gap-3 mt-1">
                  <span className="text-xs text-muted-foreground">1</span>
                  <input
                    type="number"
                    min={1}
                    max={100000}
                    value={attendees}
                    onChange={(e) => {
                      const v = parseInt(e.target.value) || 1
                      setAttendees(Math.max(1, Math.min(100000, v)))
                    }}
                    className="w-28 text-center text-sm font-bold text-foreground bg-muted/30 border border-border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-muted-foreground">10,000+</span>
                </div>
              </div>
              <button
                onClick={() => setAttendees(Math.min(10000, attendees + 100))}
                className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors shrink-0"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Premium Languages</h3>
              <span className="text-xs text-muted-foreground">+${PREMIUM_LANG_RATE}/hr</span>
            </div>
            <p className="text-xs text-muted-foreground -mt-3">
              Add support for complex languages (Chinese, Japanese, Arabic, etc.)
            </p>
            <button
              onClick={() => setPremiumLanguages(!premiumLanguages)}
              className={cn(
                "flex items-center justify-between w-full p-4 rounded-xl border-2 transition-all",
                premiumLanguages
                  ? "border-primary bg-primary/5"
                  : "border-border/50 hover:border-border bg-card"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "size-5 rounded border-2 flex items-center justify-center transition-colors",
                  premiumLanguages ? "bg-primary border-primary" : "border-muted-foreground/30"
                )}>
                  {premiumLanguages && <Check className="size-3.5 text-white" />}
                </div>
                <div className="text-sm font-medium">Enable Premium Languages</div>
              </div>
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Optional Add-ons</h3>
            <p className="text-xs text-muted-foreground -mt-3">Enhance your experience with these extras</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ADDONS.map((addon) => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                    selectedAddons.includes(addon.id)
                      ? "border-primary bg-primary/5"
                      : "border-border/50 hover:border-border bg-card"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "size-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5",
                      selectedAddons.includes(addon.id) ? "bg-primary border-primary" : "border-muted-foreground/30"
                    )}>
                      {selectedAddons.includes(addon.id) && <Check className="size-3.5 text-white" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{addon.name}</div>
                      <div className="text-xs text-muted-foreground">{addon.desc}</div>
                      <div className="text-xs font-semibold text-primary mt-1">
                        +${addon.price}/{addon.unit}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border-2 border-primary/10 bg-card p-6 space-y-6 shadow-lg">
            <div className="text-center pb-4 border-b border-border/40">
              <h3 className="text-lg font-bold">Estimate</h3>
              <p className="text-xs text-muted-foreground">Your projected cost</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{service.name}</span>
                <span className="font-medium">${baseCost.toLocaleString()}</span>
              </div>
              {additionalLanguages > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Additional languages ({additionalLanguages})</span>
                  <span className="font-medium">+${languageCost.toLocaleString()}</span>
                </div>
              )}
              {premiumLanguages && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premium languages</span>
                  <span className="font-medium">+${premiumCost.toLocaleString()}</span>
                </div>
              )}
              {selectedAddons.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Add-ons</span>
                  <span className="font-medium">+${addonCost.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-border/40">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">Total Estimate</div>
                <div className="text-4xl font-black">${totalEstimate.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground mt-1">one-time project</div>
              </div>
            </div>

            <Button className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20" onClick={openQuoteForm}>
              Request a Quote
            </Button>

            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              Custom pricing available for larger needs
            </p>
          </div>

          <div className="mt-4 p-4 rounded-xl border border-border/50 bg-card">
            <div className="flex items-start gap-3">
              <HelpCircle className="size-4 text-primary shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">100+ Languages</strong>
                <br />
                Translate between 100+ languages with AI-powered accuracy. Human review available for guaranteed quality.
              </div>
            </div>
          </div>
        </div>
      </div>

      {showQuoteForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeQuoteForm} />
          <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border/50 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeQuoteForm}
              className="absolute top-4 right-4 size-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 transition-colors"
            >
              <X className="size-4" />
            </button>
            <h2 className="text-xl font-bold mb-1">Request a Quote</h2>
            <p className="text-xs text-muted-foreground mb-6">{hours}hr &middot; {languages} lang{languages > 1 ? "s" : ""} &middot; {attendees.toLocaleString()} attendees</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                closeQuoteForm()
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleFormChange("firstName", e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleFormChange("lastName", e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleFormChange("company", e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tell us about your needs</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleFormChange("message", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Describe your project, timeline, expected audience size, languages needed, and any specific requirements..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1 h-11 text-base">
                  Submit Request
                </Button>
                <Button type="button" variant="outline" onClick={closeQuoteForm} className="flex-1 h-11 text-base">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
