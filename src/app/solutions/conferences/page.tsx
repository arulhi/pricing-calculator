import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, Globe, Users, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Conference Translation | spf.io",
  description: "Translate conferences into multiple languages simultaneously. Support in-person, online, and hybrid events of any size.",
}

export default function ConferencesPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
            <Presentation className="size-3.5" />
            Solution for Conferences
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Connect with every attendee, in every language
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Make your conference truly global with real-time captions and translations.
            Support hundreds of languages and thousands of attendees.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Multiple Languages", desc: "Translate keynotes, breakout sessions, and panels into dozens of languages simultaneously." },
            { icon: Users, title: "Any Event Size", desc: "From 50 to 50,000 attendees. In-person, online, or hybrid. spf.io scales with your event." },
            { icon: Mic, title: "Professional Quality", desc: "Combine AI translation with human interpreters for guaranteed quality at scale." },
          ].map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
