import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Captions, FileText, MessageSquare } from "lucide-react"

const PRODUCTS = [
  {
    id: "events",
    icon: Captions,
    title: "Events",
    tagline: "Host multilingual events with ease",
    features: [
      "Display real-time captions and translations, stream audio interpretation and poll audiences in 100+ languages.",
      "Use autopilot or supervise AI and swiftly correct errors in real-time to ensure quality.",
      "Useful for in-person, online, and hybrid events of all sizes.",
    ],
    testimonial: {
      quote: "I can\u2019t think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
      author: "Vikas Pota",
      role: "Founder and CEO of T4 Education",
      initials: "VP",
    },
    href: "/products",
    image: "Events",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content",
    tagline: "Translate content faster",
    features: [
      "Quickly translate audio, video, slides, and documents with language AI that learns from you.",
      "Easily edit AI generated results to achieve your desired quality while training the AI to match your style and domain.",
      "Easily manage content and collaborators across multiple languages.",
    ],
    testimonial: {
      quote: "The translation results are very helpful for translators, so they don\u2019t need to translate from scratch.",
      author: "Maria Fennita",
      role: "Director of Christianity Today Indonesia",
      initials: "MF",
    },
    href: "/products",
    image: "Content",
  },
  {
    id: "conversations",
    icon: MessageSquare,
    title: "Conversations",
    tagline: "AI translation for multilingual conversations",
    features: [
      "Let people speak freely in their native language through real-time captions and translations.",
      "Support relationships and collaboration across languages\u2013online and in-person.",
      "Customize spf.io\u2019s language AI to ensure safer and more accurate captions and translation.",
    ],
    testimonial: {
      quote: "With the spf.io Convo app, now we\u2019re able to have multiple people on a call in a group setting where we\u2019re speaking different languages.",
      author: "Pastor Steven Zapolski",
      role: "Founder of United Community Church",
      initials: "SZ",
    },
    href: "/products/multilingual-conversations",
    image: "Conversations",
  },
]

export default function ProductShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 space-y-20">
      {PRODUCTS.map((product, i) => {
        const Icon = product.icon
        const isReversed = i % 2 === 1
        return (
          <div
            key={product.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
          >
            <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{product.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground font-medium">{product.tagline}</p>
              </div>

              <ul className="space-y-4">
                {product.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="size-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-2 border-primary/30 pl-4 py-2 space-y-2">
                <p className="text-sm text-muted-foreground italic leading-relaxed">&ldquo;{product.testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-2 text-xs">
                  <div className="size-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    {product.testimonial.initials}
                  </div>
                  <div>
                    <span className="font-semibold">{product.testimonial.author}</span>
                    <span className="text-muted-foreground"> - {product.testimonial.role}</span>
                  </div>
                </div>
              </blockquote>

              <Link href={product.href}>
                <Button variant="outline" className="gap-2">
                  Learn more <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            <div className={`rounded-2xl aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border/50 flex items-center justify-center ${isReversed ? "lg:order-1" : ""}`}>
              <div className="text-center p-8">
                <Icon className="size-12 text-primary/30 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{product.image}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
