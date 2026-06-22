import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | spf.io",
  description: "Contact the spf.io support team. For sales inquiries, please use our request a quote form.",
}

export default function ContactPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Contact Support</h1>
          <p className="text-base text-muted-foreground mb-8">
            For existing customers needing support. For sales inquiries, please use our{" "}
            <Link href="/request-a-quote" className="text-primary underline underline-offset-4">request a quote</Link> form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl border border-border/50 bg-card">
              <Mail className="size-5 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Send us an email and we&apos;ll get back to you within 24 hours.</p>
              <a href="mailto:support@spf.io" className="text-sm text-primary hover:underline font-medium">support@spf.io</a>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card">
              <HelpCircle className="size-5 text-primary mb-3" />
              <h3 className="font-semibold mb-1">FAQ</h3>
              <p className="text-sm text-muted-foreground mb-4">Check our frequently asked questions for quick answers.</p>
              <Link href="/resources/frequently-asked-questions" className="text-sm text-primary hover:underline font-medium">View FAQ</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option>Technical Support</option>
                  <option>Account Question</option>
                  <option>Billing Issue</option>
                  <option>Feature Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows={5} className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" />
              </div>
              <Button className="w-full h-12 text-base">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
