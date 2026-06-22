import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Theater, Globe, Users, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Theater Translation | spf.io",
  description: "Provide real-time captions and translations for live theater performances, plays, and cultural events.",
}

export default function TheaterPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
            <Theater className="size-3.5" />
            Solution for Theater
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Make every performance accessible to all
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Provide real-time captions and translations for live theater performances, plays, and cultural events. Reach diverse audiences without language barriers.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Multi-language Support", desc: "Translate performances into multiple languages simultaneously for diverse audiences." },
            { icon: Users, title: "Audience Engagement", desc: "Audience members follow along on their own devices with captions in their preferred language." },
            { icon: Mic, title: "Live Performance Ready", desc: "Real-time captioning synchronized with live performances, with minimal latency." },
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
