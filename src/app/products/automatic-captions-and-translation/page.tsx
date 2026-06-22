import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Layers, Users, Headphones, FileText, MessageSquare } from "lucide-react"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Live AI Translation and Captions for Multilingual Events | spf.io",
  description: "Deliver real-time captions and translations in 100+ languages. Multiple operating modes including Autopilot, Supervised AI, Bidirectional Translation, and Interpreter Subtitling.",
}

const MODES = [
  { icon: Layers, name: "Autopilot", desc: "Fully automatic AI translation and captions" },
  { icon: Users, name: "Supervised AI", desc: "Human reviewer corrects AI output in real-time" },
  { icon: ArrowRight, name: "Bidirectional Translation", desc: "Two-way translation between languages" },
  { icon: FileText, name: "Manuscript", desc: "Upload prepared script for higher accuracy" },
  { icon: MessageSquare, name: "Interpreter Subtitling", desc: "Human interpreters with AI-assisted subtitles" },
]

const DISPLAY_OPTIONS = [
  { name: "Projector View", desc: "Display on public screens at your venue" },
  { name: "Audience View", desc: "Attendees view on their own mobile devices" },
  { name: "Embedded Audience View", desc: "Embed captions directly into your stream" },
]

const RELATED_PRODUCTS = [
  { icon: Headphones, name: "Audio Live Streaming", href: "/products/audio-livestreaming" },
  { icon: BarChart3, name: "Multilingual Polls", href: "/products/multilingual-polls" },
  { icon: Film, name: "Audio Video Captions & Subtitles", href: "/products/audio-video-captions-and-subtitles" },
  { icon: FileText, name: "Document Translation", href: "/products/document-translation-portal" },
  { icon: Presentation, name: "Slides Translation", href: "/products/slide-translation" },
  { icon: MessageSquare, name: "Multilingual Conversations", href: "/products/multilingual-conversations" },
]

import { BarChart3, Film, Presentation } from "lucide-react"

export default function ACTPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Automatic Captions &amp; Translation
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Live AI translation and captions for multilingual events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Deliver real-time captions and translations in 100+ languages. From fully automatic AI to human-supervised quality, choose the mode that fits your event.
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
              <h2 className="text-2xl font-bold">Deliver multiple translations at once</h2>
              <p className="text-sm text-muted-foreground">Simultaneously translate into as many languages as you need while your speaker presents.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Scale to any audience size</h2>
              <p className="text-sm text-muted-foreground">From intimate meetings to global conferences with thousands of attendees in multiple locations.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Customize your AI</h2>
              <p className="text-sm text-muted-foreground">Train the AI on your terminology, brand names, and domain-specific vocabulary for better accuracy.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Generate captions and translations the way you want</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {MODES.map((mode) => {
              const Icon = mode.icon
              return (
                <div key={mode.name} className="p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold">{mode.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mode.desc}</p>
                </div>
              )
            })}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Display and listen to translation in multiple ways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {DISPLAY_OPTIONS.map((opt) => (
              <div key={opt.name} className="p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <h3 className="text-sm font-bold mb-2">{opt.name}</h3>
                <p className="text-xs text-muted-foreground">{opt.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Integrate and connect with your streaming software</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Works seamlessly with Zoom, YouTube, OBS, StreamYard, vMix, and more.
          </p>
          <Link href="/products/captioning-translation-integrations">
            <Button variant="outline" className="gap-2">
              View all integrations <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Enhance your events with additional services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {["Remote Operators", "Professional Captioners", "Professional Interpreters"].map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card">
                <CheckCircle className="size-4 text-green-500 shrink-0" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
          <Link href="/request-a-quote">
            <Button className="gap-2 shadow-lg shadow-primary/20">
              Maximize your event&apos;s impact <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-xl font-bold mb-6">Explore more features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {RELATED_PRODUCTS.map((p) => {
              const Icon = p.icon
              return (
                <Link key={p.name} href={p.href} className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card hover:bg-card/80 transition-all text-xs font-medium">
                  <Icon className="size-4 text-primary shrink-0" />
                  {p.name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
