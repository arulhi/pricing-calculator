import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Want to get started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Schedule a call with us to assess your needs and see a live demo of spf.io.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Request a Quote <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
