import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode, Mic, Volume2, FileText, Shield, Users } from "lucide-react"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "AI-Powered Multilingual Conversation Tool | spf.io",
  description: "Real-time bidirectional and multidirectional conversation translation in 40+ languages. No app download needed — browser-based.",
}

const FEATURES = [
  { icon: QrCode, name: "Easy Access", desc: "Attendees join via QR code or URL — no app download needed" },
  { icon: Mic, name: "Push-to-Talk", desc: "Speak and get translated in real-time with push-to-talk functionality" },
  { icon: Volume2, name: "Cloud Text-to-Speech", desc: "AI voice reads translations aloud for natural conversation flow" },
  { icon: Shield, name: "Noise Reduction", desc: "Built-in noise reduction for clearer audio in any environment" },
  { icon: FileText, name: "Session Transcript", desc: "Automatic transcript of the entire conversation" },
  { icon: Users, name: "Multiple Participants", desc: "Support for groups of any size with multiple languages simultaneously" },
]

export default function ConvoPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Multilingual Conversations
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              AI-powered multilingual conversation tool
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Faciliate seamless conversations across languages with real-time AI translation.
              Perfect for meetings, small groups, and one-on-one conversations in 40+ languages.
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
              <h2 className="text-2xl font-bold">Start your conversation with ease</h2>
              <p className="text-sm text-muted-foreground">Create a session, share a QR code, and start talking. No training required.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Converse anytime, anywhere</h2>
              <p className="text-sm text-muted-foreground">Browser-based. Works on any device with a microphone and internet connection.</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Customize your AI</h2>
              <p className="text-sm text-muted-foreground">Train the AI on your terminology for safer and more accurate translations.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">Features</h2>
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
              { step: "1", title: "Create a session", desc: "Set up your conversation room with your preferred languages and settings." },
              { step: "2", title: "Share the QR code", desc: "Participants scan the QR code or open the URL on their device." },
              { step: "3", title: "Start talking", desc: "Speak in your native language. Translations appear in real-time for everyone." },
            ].map((s) => (
              <div key={s.step} className="p-5 rounded-xl border border-border/50 bg-card">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary mb-3">{s.step}</div>
                <h3 className="text-sm font-bold mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
