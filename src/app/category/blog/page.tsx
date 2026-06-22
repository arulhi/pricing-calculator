import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Blog | spf.io",
  description: "Latest articles about AI translation, multilingual events, accessibility, and product updates from spf.io.",
}

const POSTS = [
  {
    title: "Real-Time ProPresenter Translation for Multilingual Worship",
    date: "May 25, 2026",
    desc: "In celebration of Pentecost Sunday, spf.io now provides real-time ProPresenter translation by automatically translating ProPresenter slides into multiple languages the moment they appear on screen.",
    tags: ["Product", "Integration"],
  },
  {
    title: "Language Accessibility as City Infrastructure: How Elgin, IL Transformed Civic Engagement",
    date: "Apr 15, 2026",
    desc: "For local governments, shifting demographics are more than just statistics\u2013they are a call to rethink how a city functions. The City of Elgin, Illinois, found itself at a crossroads.",
    tags: ["Case Study", "Government"],
  },
  {
    title: "Change Text-to-Speech Voice Gender Instantly During Live Sessions",
    date: "Apr 1, 2026",
    desc: "Change text-to-speech voice gender on the fly to match each speaker so your audience can easily follow who's speaking.",
    tags: ["Feature", "Product"],
  },
  {
    title: "Private Live Translation: Audio-Only Mode & Access Codes for Internal Events",
    date: "Jan 29, 2026",
    desc: "New privacy features for organizations that need secure, private translation for internal events and confidential meetings.",
    tags: ["Feature", "Security"],
  },
  {
    title: "Distinct AI Interpreter Voices: Bring Clarity to Multilingual Conversations",
    date: "Nov 7, 2025",
    desc: "New AI voice profiles make it easy to distinguish between speakers in multilingual conversations.",
    tags: ["Feature", "Conversations"],
  },
  {
    title: "Make Presentations More Accessible with spf.io's Zoom-In Feature",
    date: "Nov 5, 2025",
    desc: "A new zoom-in feature helps audience members see presentation slides more clearly on their mobile devices.",
    tags: ["Feature", "Accessibility"],
  },
]

export default function BlogPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Blog</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Latest articles about AI translation, multilingual events, accessibility, and product updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post) => (
            <div key={post.title} className="group p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                ))}
              </div>
              <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
