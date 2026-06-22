import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, Globe, Users, QrCode, Mic, Sparkles } from "lucide-react"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Remote Simultaneous Interpretation for Multilingual Events | spf.io",
  description: "Stream spoken interpretation to mobile devices. No extra equipment needed. Supports RSI, assistive listening, and silent stages.",
}

const FEATURES = [
  { icon: Globe, name: "Remote Simultaneous Interpretation (RSI)", desc: "Interpreters work remotely from anywhere in the world" },
  { icon: Headphones, name: "Assistive Listening", desc: "Audience listens to interpretation on their own devices" },
  { icon: Mic, name: "Silent Stages", desc: "Speakers use native language; audience hears interpreted audio" },
  { icon: Users, name: "Audience View", desc: "Attendees access via QR code or URL on their mobile devices" },
  { icon: QrCode, name: "No Extra Equipment", desc: "Works with smartphones, tablets, and computers" },
  { icon: Sparkles, name: "AI Interpreter Assistant", desc: "AI helps interpreters with suggestions and context" },
]

export default function ALSPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Audio Live Streaming
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Simultaneous interpretation &amp; assistive listening for multilingual events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Stream spoken interpretation to your audience&apos;s mobile devices. No extra equipment needed.
              Perfect for in-person, online, and hybrid events.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Interpret and access translation anywhere</h2>
              <p className="text-sm text-muted-foreground">Interpreters work remotely. Audience listens on their own devices via headphones.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Save money and time</h2>
              <p className="text-sm text-muted-foreground">No need for expensive hardware. No travel costs for interpreters.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Scale to any audience size</h2>
              <p className="text-sm text-muted-foreground">From small meetings to stadium-sized events with thousands of attendees.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Key capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.name} className="p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold">{f.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Remote Simultaneous Interpretation", desc: "Professional interpreters connect remotely and deliver real-time audio interpretation. Audience selects their language on their device." },
              { title: "Assistive Listening or Overflow Rooms", desc: "Stream crystal-clear audio to attendees' devices. Perfect for large venues or overflow rooms where the speaker can't be heard." },
              { title: "Silent Stages", desc: "Each speaker uses their native language. Audience hears the interpreted version in their preferred language on their device." },
            ].map((step) => (
              <div key={step.title} className="p-5 rounded-xl border border-border/50 bg-card">
                <h3 className="text-sm font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
