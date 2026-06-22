import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Mic, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | spf.io",
  description: "spf.io is a product of TheoTech LLC. We help organizations make events, content, and conversations accessible in any language.",
}

export default function AboutPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            spf.io is a product of <strong>TheoTech LLC</strong>. Our platform was born out of the need
            for churches to communicate bilingually, and has grown into an all-in-one AI translation
            and accessibility platform used by leading organizations worldwide.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Today, spf.io helps organizations make live events, videos, podcasts, documents, and
            conversations accessible in 100+ languages. We integrate with Zoom, YouTube, and 30+ other platforms.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get in Touch <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Live Events", desc: "Real-time captions, translations, and audio streaming for in-person, online, and hybrid events." },
            { icon: Mic, title: "Content Translation", desc: "Translate audio, video, slides, and documents with AI that learns from you." },
            { icon: FileText, title: "Conversations", desc: "Multilingual conversations with real-time AI translation in 40+ languages." },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-muted/20">
          <h2 className="text-2xl font-bold mb-6">Featured case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Language Accessibility as City Infrastructure", desc: "How Elgin, IL transformed civic engagement with multilingual access." },
              { title: "Basics Conference 2025 in 8 Languages", desc: "Large-scale conference translation with AI and human supervision." },
              { title: "Live Event Translation at CES 2025", desc: "Real-time translation for one of the world's largest tech events." },
            ].map((cs) => (
              <Link key={cs.title} href="/spfio-case-studies" className="p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all group">
                <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                <p className="text-xs text-muted-foreground">{cs.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
