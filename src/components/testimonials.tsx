const TESTIMONIALS = [
  {
    quote:
      "I can\u2019t think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
    author: "Vikas Pota",
    role: "Founder and CEO of T4 Education",
    initials: "VP",
  },
  {
    quote:
      "The translation results are very helpful for translators, so they don\u2019t need to translate from scratch.",
    author: "Maria Fennita",
    role: "Director of Christianity Today Indonesia",
    initials: "MF",
  },
  {
    quote:
      "With the spf.io Convo app, now we\u2019re able to have multiple people on a call in a group setting where we\u2019re speaking different languages, even more than two, and we\u2019re able to actually share our experiences, faith, and cultural expressions with one another.",
    author: "Pastor Steven Zapolski",
    role: "Founder of United Community Church",
    initials: "SZ",
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          What our customers say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-lg flex flex-col"
          >
            <div className="text-4xl leading-none text-primary/10 select-none mb-4">&ldquo;</div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">{t.quote}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
