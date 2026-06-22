import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Globe, Shield, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Document Translation Portal | spf.io",
  description: "Translate documents, PDFs, presentations, and more into 100+ languages while preserving original formatting.",
}

export default function DocumentTranslationPage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            All Features / Document Translation Portal
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Document translation that preserves your formatting
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Upload PDFs, Word documents, presentations, and more. Get accurate translations in 100+ languages while keeping your original layout intact.
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
              { icon: FileText, title: "Format Preservation", desc: "Your documents keep their original formatting, fonts, and layout after translation." },
              { icon: Globe, title: "100+ Languages", desc: "Translate into any of our supported languages with a single upload." },
              { icon: Download, title: "Easy Export", desc: "Download translated documents in their original format, ready to share." },
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
