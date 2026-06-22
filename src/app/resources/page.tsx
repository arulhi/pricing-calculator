import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources | spf.io",
  description: "Explore spf.io resources including blog articles, case studies, documentation, FAQ, press releases, and the training center.",
}

const SECTIONS = [
  { title: "Blog", desc: "Latest articles about AI translation, multilingual events, and product updates.", href: "/category/blog" },
  { title: "Case Studies", desc: "See how organizations use spf.io to make content accessible in any language.", href: "/spfio-case-studies" },
  { title: "Documentation", desc: "Get started guides, how-to articles, and troubleshooting help.", href: "/resources/documentation" },
  { title: "FAQ", desc: "Find answers to commonly asked questions about spf.io.", href: "/resources/frequently-asked-questions" },
  { title: "Press Release", desc: "Latest press releases and media resources.", href: "/press" },
  { title: "Training Center", desc: "Learn how to make the most of spf.io with guided training.", href: "https://learn.spf.io" },
]

export default function ResourcesPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Resources</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to get the most out of spf.io.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map((s) => (
            <Link key={s.title} href={s.href} className="group p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
