import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Captions, Headphones, BarChart3, Film, FileText, Presentation, MessageSquare, Brain, Mic, Languages, Volume2, Search, ShieldCheck, Sparkles, BookText } from "lucide-react"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "AI Translation & Accessibility Tools | spf.io",
  description: "Make every experience accessible in any language. Automatically caption and translate events, content, and conversations in 100+ languages.",
}

const PRODUCT_CATEGORIES = [
  {
    title: "Events",
    desc: "Scale and run multilingual events with confidence",
    icon: Captions,
    items: [
      { name: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation", icon: Captions },
      { name: "Audio Live Streaming", href: "/products/audio-livestreaming", icon: Headphones },
      { name: "Multilingual Polls", href: "/products/multilingual-polls", icon: BarChart3 },
    ],
  },
  {
    title: "Content",
    desc: "Accelerate translation management and delivery",
    icon: Film,
    items: [
      { name: "Audio Video Captions & Subtitles", href: "/products/audio-video-captions-and-subtitles", icon: Film },
      { name: "Document Translation Portal", href: "/products/document-translation-portal", icon: FileText },
      { name: "Slides Translation", href: "/products/slide-translation", icon: Presentation },
    ],
  },
  {
    title: "Conversations",
    desc: "Facilitate seamless multilingual conversations",
    icon: MessageSquare,
    items: [
      { name: "Multilingual Conversations", href: "/products/multilingual-conversations", icon: MessageSquare },
    ],
  },
]

const AI_FEATURES = [
  { icon: Brain, name: "AI Adaptation", desc: "Fine-tune AI to your specific needs and domain" },
  { icon: Mic, name: "Custom Speech Recognition", desc: "Train ASR models on your vocabulary" },
  { icon: Languages, name: "Adapted Machine Translation", desc: "Custom MT models for your content" },
  { icon: Volume2, name: "Custom Speech Synthesis", desc: "Branded voice output for translations" },
  { icon: Search, name: "Vocabulary Fine-Tuning", desc: "Improve accuracy of specialized terms" },
  { icon: ShieldCheck, name: "Keyword Booster", desc: "Better recognition of important terms" },
  { icon: BookText, name: "Do Not Translate", desc: "Maintain brand consistency" },
  { icon: Sparkles, name: "Profanity Filter", desc: "Safer captions and translations" },
]

export default function ProductsPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Make every experience accessible in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-amber-500">
                any language
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              All-in-one AI translation &amp; accessibility platform for events, content, and conversations.
            </p>
          </div>
        </div>
      </section>

      {PRODUCT_CATEGORIES.map((cat) => {
        const CatIcon = cat.icon
        return (
          <section key={cat.title} className="border-t border-border/40 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CatIcon className="size-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cat.items.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-md hover:border-primary/20"
                    >
                      <div className="size-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <ItemIcon className="size-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold group-hover:text-primary transition-colors">{item.name}</div>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-t border-border/40 bg-muted/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Brain className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Custom AI</h2>
              <p className="text-sm text-muted-foreground">Fine-tune AI to your needs</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.name}
                  className="p-5 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-8 rounded-lg bg-primary/5 flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{feature.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
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
