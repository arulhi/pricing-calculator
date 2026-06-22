import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Church, Globe, Heart, Users, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Church Translation & Accessibility | spf.io",
  description: "Reach multilingual congregations with real-time translation of sermons, songs, and small group conversations.",
}

const BENEFITS = [
  { icon: Globe, title: "Reach Multilingual Congregations", desc: "Welcome attendees who speak different languages in the same service." },
  { icon: Heart, title: "Inclusive Worship Experience", desc: "Everyone participates fully, regardless of their primary language." },
  { icon: Users, title: "Connect Small Groups", desc: "Use Convo for multilingual small group discussions and Bible studies." },
  { icon: Mic, title: "Translate Sermons in Real-Time", desc: "Display captions and translations of sermons on screens or mobile devices." },
]

export default function ReligiousPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
            <Church className="size-3.5" />
            Solution for Churches
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Reach everyone in your congregation, in every language
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether your congregation speaks multiple languages or you want to reach new communities,
            spf.io makes it easy to translate your services in real-time.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{b.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-muted/20">
          <h2 className="text-2xl font-bold mb-4">Use cases for churches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Sunday worship services", "Small group Bible studies", "Youth group meetings", "Leadership training", "Community outreach events", "Online/hybrid services"].map((use) => (
              <div key={use} className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                {use}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
