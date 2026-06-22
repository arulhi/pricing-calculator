import type { Metadata } from "next"
import PricingCalculator from "@/components/pricing-calculator"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Pricing Calculator | spf.io",
  description: "Build your perfect multilingual solution. Calculate your custom pricing for AI-powered translation services.",
}

export default function PricingPage() {
  return (
    <>
      <section className="pt-20 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            spf.io Pricing Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build your perfect multilingual solution. Only pay for what you need.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <PricingCalculator />
      </section>

      <section className="border-t border-border/40 bg-muted/20 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Need a custom solution?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contact us for custom pricing tailored to your organization&apos;s specific needs.
          </p>
          <a
            href="/request-a-quote"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
