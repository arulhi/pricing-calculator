const SERVICES = [
  "On-call Support & Remote Operators",
  "Professional Captioners & Interpreters",
  "Event Preparation & Tech Checks",
  "AI Customization",
  "Multilingual Strategy Consulting",
  "Translation & Transcription Services",
]

export default function Services() {
  return (
    <section className="border-y border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Additional services
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Elevate your translation &amp; accessibility experience with our professional services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 p-5 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-all hover:shadow-md hover:border-primary/20"
            >
              <span className="size-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
