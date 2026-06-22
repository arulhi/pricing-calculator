import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, BookOpen, Settings, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Customization | spf.io",
  description: "Train spf.io AI on your domain-specific terminology, brand names, and vocabulary for higher translation accuracy.",
}

export default function AICustomizationPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / AI Customization
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Customize your AI for domain-specific accuracy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Train the spf.io AI on your organization's terminology, brand names, product names, and industry vocabulary. Get higher translation accuracy that understands your domain.
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
              { icon: BookOpen, title: "Custom Glossary", desc: "Upload your own terminology lists and brand names. The AI learns your vocabulary." },
              { icon: Settings, title: "Domain Training", desc: "Train models on industry-specific content for medical, legal, tech, or any domain." },
              { icon: TrendingUp, title: "Continuous Improvement", desc: "Feedback loop helps the AI improve over time based on corrections and usage patterns." },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to customize your AI?</h2>
          <p className="text-sm text-muted-foreground mb-6">Contact our team to set up custom AI training for your organization.</p>
          <Link href="/request-a-quote">
            <Button className="gap-2 shadow-lg shadow-primary/20">
              Get started <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
