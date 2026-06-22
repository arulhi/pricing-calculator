import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, HelpCircle, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Troubleshooting Guides | spf.io Documentation",
  description: "Solutions to common issues and error messages in spf.io.",
}

const FAQS = [
  { q: "Why is my translation not appearing?", a: "Check that your microphone is working and that the correct source language is selected. Ensure attendees have refreshed their page." },
  { q: "How do I fix audio sync issues?", a: "Audio sync issues can be resolved by adjusting the latency settings in your event configuration. Try increasing the buffer." },
  { q: "My captions are inaccurate, what can I do?", a: "Switch to Supervised AI mode with a human reviewer, or upload a manuscript for better accuracy." },
  { q: "Attendees can't see the translation", a: "Make sure attendees have selected their target language from the language picker. Check that the event is published." },
  { q: "How do I reset my password?", a: "Use the 'Forgot Password' link on the login page. A reset link will be sent to your email." },
]

export default function HelpPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
            <Link href="/resources/documentation" className="hover:text-primary transition-colors">Documentation</Link> / Troubleshooting Guides
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Troubleshooting Guides</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Solutions to common issues and frequently asked questions about spf.io.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {FAQS.map((faq) => (
            <div key={faq.q} className="p-6 rounded-xl border border-border/50 bg-card">
              <h3 className="font-bold text-sm mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/resources/documentation">
            <Button variant="outline" className="gap-2">
              Back to documentation <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
