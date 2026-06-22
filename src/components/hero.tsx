import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              AI-Powered Translation Platform
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Access in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-amber-500">
                any language
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Make your events, content, and conversations{" "}
              <strong>accessible</strong> and <strong>multilingual</strong>{" "}
              with our all-in-one platform powered by AI with a human touch.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/request-a-quote">
                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  Request a Quote <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-background border border-border/50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="size-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <div className="size-8 rounded-lg bg-primary/20" />
                </div>
                <p className="text-sm text-muted-foreground">All-in-one AI translation & accessibility platform</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-4 md:p-6 rounded-xl border border-border/50 bg-muted/30 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <Download className="size-5 text-primary" />
            <span className="text-sm font-semibold">Free Checklist for Multilingual Events</span>
          </div>
          <p className="text-sm text-muted-foreground flex-1">
            Download a FREE checklist spreadsheet covering what to do before, during and after your event
            to delight your multilingual audience.
          </p>
          <Button variant="outline" size="sm" className="shrink-0">
            Download Now
          </Button>
        </div>
      </div>
    </section>
  )
}
