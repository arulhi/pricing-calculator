import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare, Check, Clock, Shield, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Request a Quote | spf.io",
  description: "Get a custom quote for AI-powered translation. Tell us about your multilingual needs and we'll build a tailored solution.",
}

export default function RequestQuotePage() {
  return (
    <>
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Let&apos;s find your perfect solution
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tell us about your multilingual needs and we&apos;ll put together a custom quote
                  tailored to your specific requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Quick Response", desc: "We typically respond within 24 hours" },
                  { icon: Shield, title: "No Obligation", desc: "Free consultation, no commitment required" },
                  { icon: Headphones, title: "Expert Guidance", desc: "Our team understands your needs" },
                  { icon: Check, title: "Custom Solution", desc: "Tailored pricing for your specific use case" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="space-y-4 pt-4 border-t border-border/40">
                <h3 className="text-sm font-semibold">Other ways to reach us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="size-4 text-primary" />
                    sales@spf.io
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="size-4 text-primary" />
                    +1 (800) 555-0199
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MessageSquare className="size-4 text-primary" />
                    Live chat available Mon-Fri 9am-6pm EST
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <h2 className="text-xl font-bold mb-6">Tell us about your project</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                    <input id="firstName" type="text" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                    <input id="lastName" type="text" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <input id="company" type="text" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Service interested in</label>
                  <select id="service" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option value="live-events">Live Events</option>
                    <option value="content">Content Translation</option>
                    <option value="conversations">Conversations</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Tell us about your needs</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Describe your project, timeline, expected audience size, languages needed, and any specific requirements..." />
                </div>

                <Button className="w-full h-12 text-base">Submit Request</Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
