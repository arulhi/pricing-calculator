import Link from "next/link"
import { ExternalLink } from "lucide-react"

const INTEGRATIONS = [
  "StreamYard", "Twitch", "OBS", "Facebook Live",
  "YouTube", "Google Meet", "Microsoft Teams", "Zoom",
]

export default function Integrations() {
  return (
    <section className="border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            We integrate with multiple streaming platforms
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center p-6 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-md hover:border-primary/20 text-sm font-semibold"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products/captioning-translation-integrations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all integrations <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
