const PAIN_POINTS = [
  "Overwhelmed by the complexity of creating a multilingual event?",
  "Concerned about costs blowing up as you add more and more languages?",
  "Frustrated by the process of finding and managing quality interpreters and translators?",
  "Anxious about burning out staff and volunteers?",
  "Worried few people will actually use your translations?",
  "Looking for a solution that scales as your audience grows?",
]

export default function PainPoints() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Delighting your multilingual audience{" "}
          <span className="text-muted-foreground">doesn&apos;t have to be stressful.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {PAIN_POINTS.map((text) => (
          <div
            key={text}
            className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:bg-card/80 transition-colors"
          >
            <span className="size-2 rounded-full bg-destructive shrink-0" />
            <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center mt-12">
        <p className="text-base text-muted-foreground leading-relaxed">
          Spf.io (<em>spiffy-oh</em>) makes it easy to translate events, content, and conversations.
          Our AI translation platform <strong>streamlines your localization efforts</strong> and{" "}
          <strong>elevates the end-to-end experience</strong> for your multilingual audience.
        </p>
      </div>
    </section>
  )
}
