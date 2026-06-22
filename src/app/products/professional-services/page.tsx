import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Mic, Headphones, Settings, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Services | spf.io",
  description: "Remote operators, professional captioners, interpreters, and event setup services to ensure your event runs smoothly.",
}

const SERVICES = [
  { icon: Headphones, title: "Remote Operators", desc: "Our trained operators manage your event setup, monitor translations, and provide technical support throughout." },
  { icon: Mic, title: "Professional Captioners", desc: "Human captioners deliver high-accuracy captions for audiences that require ADA compliance or premium quality." },
  { icon: Users, title: "Professional Interpreters", desc: "Certified human interpreters work alongside AI for events where accuracy and nuance are critical." },
  { icon: Settings, title: "Event Setup & Support", desc: "We handle the technical setup, testing, and live support so you can focus on your event." },
]

export default function ProfessionalServicesPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Professional Services
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Professional services for your most important events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From remote operators to certified interpreters, our professional services ensure your event delivers flawless multilingual experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  Request a Quote <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  See a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ideal for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["High-stakes conferences", "Government & diplomatic events", "ADA-compliant broadcasts"].map((use) => (
              <div key={use} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card">
                <CheckCircle className="size-4 text-green-500 shrink-0" />
                <span className="text-sm font-medium">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
