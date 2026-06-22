import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Monitor, Users, CheckCircle, ArrowRight, Youtube } from "lucide-react"

export const metadata: Metadata = {
  title: "Watch a Demo | spf.io",
  description: "See how spf.io works for online events, in-person events, and multilingual conversations. Watch product demos and feature videos.",
}

const ONLINE_FEATURES = [
  "Virtual conferences and webinars",
  "Zoom meeting translation",
  "Livestream captioning for YouTube and Facebook",
  "StreamYard and OBS integration",
]

const INPERSON_FEATURES = [
  "Assisted listening for large venues",
  "Public screen captions and translations",
  "Slide translation in real-time",
  "Audience View on personal devices",
]

const FEATURE_VIDEOS = [
  "Translate your livestream into many languages",
  "Caption and translate Zoom meetings",
  "Demo using autopilot, autotranslate, bidirectional translation",
  "Translation demo using interpreter subtitling",
  "How to caption/translate StreamYard broadcast",
  "Caption, translate and subtitle YouTube livestreams",
  "Using the Audience View",
]

export default function DemoPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
              <Play className="size-3.5" />
              Live Demo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              See how spf.io is used for...
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl border border-border/50 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor className="size-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Online Events</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect for virtual conferences, Zoom meetings, and livestreamed events.
              </p>
              <ul className="space-y-3 mb-8">
                {ONLINE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="size-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                <Play className="size-10 text-muted-foreground/40" />
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="size-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">In-Person Events</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Ideal for conferences, churches, and live audiences at venues.
              </p>
              <ul className="space-y-3 mb-8">
                {INPERSON_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="size-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                <Play className="size-10 text-muted-foreground/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Feature Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURE_VIDEOS.map((video) => (
              <div key={video} className="group p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all cursor-pointer">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center mb-3">
                  <Youtube className="size-8 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{video}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a personalized demo with our team for a live walkthrough tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request-a-quote">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                Request a Demo <ArrowRight className="size-4 ml-1" />
              </Button>
            </Link>
            <Link href="/request-a-quote">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
