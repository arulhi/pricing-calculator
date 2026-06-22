import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, Languages, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Slides Translation | spf.io",
  description: "Translate presentation slides into multiple languages while preserving layout, images, and animations.",
}

export default function SlidesTranslationPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Slides Translation
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Translate your presentations for a global audience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Upload PowerPoint or Google Slides files and get them translated into 100+ languages while preserving all formatting, images, and animations.
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
              { icon: Presentation, title: "Format Preserved", desc: "Your slide designs, images, and animations remain intact after translation." },
              { icon: Languages, title: "Multi-language Output", desc: "Generate translated versions in multiple languages from one source file." },
              { icon: Zap, title: "Fast Processing", desc: "AI-powered translation delivers results in minutes, not hours." },
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
    </>
  )
}
