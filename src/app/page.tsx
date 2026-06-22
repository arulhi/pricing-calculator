import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import PainPoints from "@/components/pain-points"
import Features from "@/components/features"
import ProductShowcase from "@/components/product-showcase"
import Integrations from "@/components/integrations"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import CTASection from "@/components/cta-section"
import BlogSection from "@/components/blog-section"
import PricingCalculator from "@/components/pricing-calculator"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PainPoints />
      <Features />
      <ProductShowcase />
      <Integrations />
      <Testimonials />
      <Services />
      <CTASection />
      <BlogSection />
      <section className="border-y border-border/40 bg-muted/20 py-20 md:py-28">
        <PricingCalculator />
      </section>
      <FAQSection />
    </>
  )
}
