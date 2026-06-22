import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Globe, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Multilingual Polls & Q&A | spf.io",
  description: "Engage your audience with live polls, Q&A, and surveys in multiple languages. Real-time results displayed in every language.",
}

export default function MultilingualPollsPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Multilingual Polls
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Live polling and Q&A in every language
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Engage your multilingual audience with live polls, Q&A sessions, and surveys. Participants respond in their own language and see results in yours.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Live Polls", desc: "Create and launch polls during your event. Attendees vote in their preferred language and results update in real-time." },
              { icon: MessageSquare, title: "Moderated Q&A", desc: "Attendees submit questions in any language. Moderators review, translate, and publish to the audience." },
              { icon: Globe, title: "Multi-language Results", desc: "Poll results and Q&A content are automatically translated, so every attendee sees them in their own language." },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Seamlessly integrated with your event</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Multilingual Polls works alongside Automatic Captions & Translation and Audio Live Streaming. Launch polls during any session and keep your audience engaged across language barriers.
            </p>
            <Link href="/products">
              <Button variant="outline" className="gap-2">
                Explore all products <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
