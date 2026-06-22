import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const POSTS = [
  {
    title: "Real-Time ProPresenter Translation for Multilingual Worship",
    date: "May 25, 2026",
    href: "#",
    excerpt:
      "In celebration of Pentecost Sunday, spf.io now provides real-time ProPresenter translation by automatically translating ProPresenter slides into multiple languages the moment they appear on screen.",
  },
  {
    title: "Language Accessibility as City Infrastructure: How Elgin, IL Transformed Civic Engagement",
    date: "Apr 15, 2026",
    href: "#",
    excerpt:
      "For local governments, shifting demographics are more than just statistics\u2013they are a call to rethink how a city functions. The City of Elgin, Illinois, found itself at a crossroads.",
  },
  {
    title: "Change Text-to-Speech Voice Gender Instantly During Live Sessions",
    date: "Apr 1, 2026",
    href: "#",
    excerpt:
      "Change text-to-speech voice gender on the fly to match each speaker so your audience can easily follow who\u2019s speaking.",
  },
]

export default function BlogSection() {
  return (
    <section className="border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our latest articles
          </h2>
          <Link href="/category/blog">
            <Button variant="ghost" className="gap-2">
              Explore our blog <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <div className="rounded-2xl border border-border/50 bg-card overflow-hidden hover:shadow-lg transition-all hover:border-primary/20 h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="size-5 rounded bg-primary/20" />
                  </div>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <div className="text-xs text-muted-foreground">{post.date}</div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
