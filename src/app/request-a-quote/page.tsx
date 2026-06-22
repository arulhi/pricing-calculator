import PricingCalculator from "@/components/pricing-calculator";

export default function RequestQuotePage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Request a Quote
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use the calculator below to estimate your pricing, then submit
              your request and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
        <PricingCalculator showHeading={false} />
      </section>
    </>
  );
}
