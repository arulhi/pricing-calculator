import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Film, Upload, Clock, Languages } from "lucide-react"

export const metadata: Metadata = {
  title: "Audio Video Captions & Subtitles | spf.io",
  description: "Upload audio and video files for automated captioning and subtitle generation in 100+ languages with AI-powered accuracy.",
}

export default function CaptionsSubtitlesPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Audio Video Captions &amp; Subtitles
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Automated captions and subtitles for any media
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Upload audio or video files and get accurate captions and subtitles in 100+ languages. Perfect for on-demand content, recorded sessions, and media libraries.
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
              { icon: Upload, title: "Batch Processing", desc: "Upload multiple files at once. Process entire media libraries in a single workflow." },
              { icon: Clock, title: "Fast Turnaround", desc: "AI-powered captioning delivers results in minutes, not hours or days." },
              { icon: Languages, title: "100+ Languages", desc: "Generate subtitles in over 100 languages from a single source file." },
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

      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-4">Supported formats</h2>
          <p className="text-sm text-muted-foreground mb-4">MP4, MOV, WAV, MP3, M4A, and more. Export captions as SRT, VTT, or embed directly.</p>
          <Link href="/request-a-quote">
            <Button className="gap-2">Get started <ArrowRight className="size-4" /></Button>
          </Link>
        </div>
      </section>
    </>
  )
}
