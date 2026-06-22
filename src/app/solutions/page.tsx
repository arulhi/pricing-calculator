import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Solutions | spf.io",
  description: "Discover how spf.io helps churches, conferences, corporate events, education, government, and theaters make content accessible in any language.",
}

const SOLUTIONS = [
  { title: "Church", desc: "Reach multilingual congregations with real-time translation of sermons, songs, and small groups.", href: "/solutions/religious" },
  { title: "Conferences", desc: "Connect with every attendee in their language — in-person, online, or hybrid.", href: "/solutions/conferences" },
  { title: "Corporate Events", desc: "Unite your global workforce with translated all-hands meetings and training.", href: "/solutions/corporate-events" },
  { title: "Education", desc: "Make classrooms accessible to every student with real-time captions and translations.", href: "/solutions/education" },
  { title: "Government", desc: "Serve every citizen in their language and meet accessibility compliance.", href: "/solutions/government" },
  { title: "Theater", desc: "Make live performances accessible with real-time captions and translations.", href: "#" },
]

export default function SolutionsPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Solutions</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how spf.io helps organizations make every experience accessible in any language.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((s) => (
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
