import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileQuestion, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "How do I ... | spf.io Documentation",
  description: "Step-by-step guides for common tasks and workflows in spf.io.",
}

const GUIDES = [
  { q: "How do I set up my first event?", desc: "Create an event, configure languages, and invite speakers." },
  { q: "How do I add multiple languages?", desc: "Configure source and target languages for your event." },
  { q: "How do I invite attendees?", desc: "Share event links and manage attendee access." },
  { q: "How do I use the Autopilot mode?", desc: "Enable fully automatic AI translation with no human intervention." },
  { q: "How do I configure Supervised AI?", desc: "Set up human reviewers to correct AI output in real-time." },
  { q: "How do I embed captions on my website?", desc: "Get the embed code to display captions on any webpage." },
]

export default function HowDoIPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            <Link href="/resources/documentation" className="hover:text-primary transition-colors">Documentation</Link> / How do I ...
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">How do I ...</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Step-by-step guides for common tasks and workflows in spf.io.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GUIDES.map((guide) => (
            <div key={guide.q} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all group cursor-pointer">
              <div className="flex items-start gap-3">
                <FileQuestion className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{guide.q}</h3>
                  <p className="text-xs text-muted-foreground">{guide.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/resources/documentation">
            <Button variant="outline" className="gap-2">
              Back to documentation <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
