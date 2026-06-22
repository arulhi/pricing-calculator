import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Press | spf.io",
  description: "Press releases and media resources for spf.io, the all-in-one AI translation and accessibility platform.",
}

const PRESS_RELEASES = [
  { title: "Real-Time ProPresenter Translation for Multilingual Worship", date: "May 25, 2026", desc: "spf.io now provides real-time ProPresenter translation, automatically translating slides into multiple languages during worship services." },
  { title: "spf.io Launches Enhanced AI Customization Features", date: "Mar 15, 2026", desc: "New vocabulary fine-tuning, keyword booster, and custom glossary features give organizations more control over translation accuracy." },
  { title: "City of Elgin Partners with spf.io for Language Accessibility", date: "Feb 10, 2026", desc: "Elgin, IL becomes the first city to use spf.io as civic infrastructure for multilingual city council meetings and public services." },
  { title: "spf.io Convo App Reaches 40+ Languages", date: "Jan 5, 2026", desc: "The multilingual conversation tool expands language support for real-time bidirectional translation in group settings." },
  { title: "spf.io Powers Translation at CES 2025", date: "Jan 8, 2025", desc: "Live AI translation and captions delivered in dozens of languages for one of the world's largest technology events." },
]

export default function PressPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Press</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Latest press releases and media resources for spf.io.
          </p>
        </div>

        <div className="space-y-4">
          {PRESS_RELEASES.map((pr) => (
            <div key={pr.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all group">
              <div className="text-xs text-muted-foreground mb-2">{pr.date}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{pr.title}</h3>
              <p className="text-sm text-muted-foreground">{pr.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-border/50 bg-muted/20 text-center">
          <h3 className="text-xl font-bold mb-3">Media Inquiries</h3>
          <p className="text-sm text-muted-foreground mb-4">For press and media inquiries, please contact us.</p>
          <Link href="/contact-us">
            <Button variant="outline">Contact Us <ArrowRight className="size-4 ml-1" /></Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
