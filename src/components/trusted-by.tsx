const LOGOS = [
  "Volvo", "Accenture", "CES", "Christianity Today", "Databricks", "Delta",
  "Panasonic", "Smartsheet", "X Corp.", "Netherlands National Football Team",
]

export default function TrustedBy() {
  return (
    <section className="border-y border-border/40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-wider mb-8">
          Trusted by leading organizations worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-bold text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
