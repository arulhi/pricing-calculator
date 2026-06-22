import { Captions, Headphones, BarChart3, Film, FileText, Presentation, MessageSquare, Ellipsis } from "lucide-react"

const PRODUCTS = [
  { icon: Captions, title: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation" },
  { icon: Headphones, title: "Audio Live Streaming", href: "/products/audio-livestreaming" },
  { icon: BarChart3, title: "Multilingual Polls", href: "/products/multilingual-polls" },
  { icon: Film, title: "Audio Video Captions & Subtitles", href: "/products/audio-video-captions-and-subtitles" },
  { icon: FileText, title: "Document Translation Portal", href: "/products/document-translation-portal" },
  { icon: Presentation, title: "Slides Translation", href: "/products/slide-translation" },
  { icon: MessageSquare, title: "Multilingual Conversations", href: "/products/multilingual-conversations" },
  { icon: Ellipsis, title: "More", href: "/products" },
]

export default function Features() {
  return (
    <section className="border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pick any language you need from over 100 languages
          </h2>
          <p className="text-base text-muted-foreground">
            Select a pillar to discover how we can help
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => {
            const Icon = product.icon
            return (
              <a
                key={product.title}
                href={product.href}
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
              >
                <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="size-6 text-primary" />
                </div>
                <span className="text-xs font-semibold leading-snug">{product.title}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
