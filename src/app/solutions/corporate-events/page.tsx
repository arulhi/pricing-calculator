import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Event Translation | spf.io",
  description: "Translate corporate events, all-hands meetings, product launches, and internal communications into every language your team speaks.",
}

export default function CorporateEventsPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
            <Building2 className="size-3.5" />
            Solution for Corporate Events
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Unite your global workforce
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Translate all-hands meetings, product launches, training sessions, and internal communications
            so every employee can participate fully regardless of their language.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Global All-Hands", desc: "Translate company-wide meetings so every employee, everywhere, can participate." },
            { icon: TrendingUp, title: "Product Launches", desc: "Reach international markets with translated product announcements and demonstrations." },
            { icon: Users, title: "Team Collaboration", desc: "Break down language barriers in cross-functional, international teams." },
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
