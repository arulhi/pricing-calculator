import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Monitor, Video, Calendar, Smartphone, Puzzle, Repeat, Shuffle } from "lucide-react"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Live Captioning Integrations for Multilingual Events | spf.io",
  description: "Integrate spf.io with Facebook Live, YouTube, OBS, Zoom, Microsoft Teams, Google Meet, StreamYard, and 30+ more platforms.",
}

const PLATFORM_CATEGORIES = [
  {
    title: "Streaming Platforms",
    icon: Monitor,
    platforms: ["Facebook Live", "YouTube", "OBS", "Vimeo", "StreamYard", "Twitch", "Restream", "Brightcove", "Resi", "BoxCast"],
  },
  {
    title: "Online Meeting Platforms",
    icon: Video,
    platforms: ["Microsoft Teams", "Zoom", "Zoom for Government", "Google Meet", "WebEx", "GoToWebinar"],
  },
  {
    title: "Virtual Event Platforms",
    icon: Calendar,
    platforms: ["Airmeet", "BigMarker", "Church Online Platform", "Crowdcast", "Cvent", "EventsAir", "Hopin", "Notified", "Webex Events", "Swoogo", "vFairs", "ProPresenter"],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    platforms: ["Rock Mobile", "Subsplash"],
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Products / Integrations
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Live captioning integrations for multilingual events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Captions and translations that go wherever you go. spf.io integrates with the streaming, meeting,
              and event platforms you already use.
            </p>
            <Link href="/request-a-quote">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                Request a Quote <ArrowRight className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {PLATFORM_CATEGORIES.map((cat) => {
        const Icon = cat.icon
        return (
          <section key={cat.title} className="border-t border-border/40 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="size-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{cat.title}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {cat.platforms.map((p) => (
                  <div key={p} className="flex items-center justify-center p-4 rounded-xl border border-border/50 bg-card text-sm font-medium text-center">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Deliver captions and subtitles your way</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Puzzle, title: "Flexible Captioning", desc: "Choose from script-based, automatic, human, or mixed captioning modes." },
              { icon: Repeat, title: "Connect, Automate, Streamline", desc: "Leverage customizable tools for localization and workflow automation." },
              { icon: Shuffle, title: "Pivot Between Event Types", desc: "Easily switch between hybrid, in-person, and virtual events." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
