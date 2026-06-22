import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | spf.io",
  description: "See how organizations use spf.io to make their events, content, and conversations accessible in any language.",
}

const CASE_STUDIES = [
  { title: "Language Accessibility as City Infrastructure", org: "City of Elgin, IL", desc: "How Elgin transformed civic engagement by making city council meetings and public services accessible in multiple languages.", tags: ["Government", "Civic Engagement"] },
  { title: "Basics Conference 2025 in 8 Languages", org: "Basics Conference", desc: "A large-scale Christian conference delivered simultaneous translation in 8 languages using AI with human supervision.", tags: ["Conference", "Religious"] },
  { title: "Live Event Translation at CES 2025", org: "CES", desc: "Real-time AI translation for one of the world's largest technology trade shows, supporting dozens of languages.", tags: ["Conference", "Technology"] },
  { title: "Multilingual Worship at United Community Church", org: "United Community Church", desc: "A growing church uses spf.io Convo for multilingual small groups and spf.io Events for Sunday service translation.", tags: ["Religious", "Conversations"] },
  { title: "Corporate All-Hands Translation", org: "Global Tech Company", desc: "A multinational corporation translates quarterly all-hands meetings into 12 languages for their global workforce.", tags: ["Corporate", "Events"] },
  { title: "University Lecture Translation", org: "International University", desc: "A university with diverse international students uses spf.io to translate lectures in real-time.", tags: ["Education", "Events"] },
]

export default function CaseStudiesPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Case Studies</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how organizations around the world use spf.io to make their events, content, and conversations
            accessible in any language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all group">
              <div className="flex flex-wrap gap-2 mb-3">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{cs.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{cs.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Start Your Story <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
