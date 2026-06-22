"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "How do you pronounce spf.io?",
    a: "It's pronounced \"spiffy-oh\"!",
  },
  {
    q: "What languages does spf.io support?",
    a: "We support over 100 languages for captions and translation, and over 70 languages for speech-to-speech (conversations). This includes major languages like English, Spanish, French, German, Chinese, Japanese, Arabic, and many more.",
  },
  {
    q: "Do speakers need any software to use spf.io?",
    a: "No! Speakers just need to show up and speak. Only the event operator needs access to the spf.io control panel. Audience members access translations via a QR code or URL on their mobile devices.",
  },
  {
    q: "How accurate is the automatic translation?",
    a: "Our AI provides highly accurate real-time translations. You can use autopilot mode for fully automatic translation, or supervised mode where a human reviewer corrects AI output in real-time for guaranteed quality. You can also customize the AI with your own terminology and style.",
  },
  {
    q: "How does spf.io pricing work?",
    a: "spf.io operates on a subscription-based model with per-minute billing. You pay for the minutes of translation/interpretation used. There is also an onboarding fee that includes training, support, and a tech check. Contact us for a custom quote based on your specific needs.",
  },
  {
    q: "Can I use spf.io for in-person events?",
    a: "Absolutely! spf.io works for in-person, online, and hybrid events. Attendees can view captions and translations on their mobile devices, public screens via the Projector View, or using their own device with the Audience View.",
  },
  {
    q: "What streaming platforms does spf.io integrate with?",
    a: "spf.io integrates with Facebook Live, YouTube, OBS, Vimeo, StreamYard, Twitch, Restream, Brightcove, Resi, BoxCast, Microsoft Teams, Zoom, Google Meet, WebEx, GoToWebinar, and many more virtual event platforms.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4">
          Questions?
        </h2>
        <p className="text-base text-muted-foreground text-center mb-12">
          Check out our Frequently Asked Questions or{" "}
          <Link href="/contact-us" className="text-primary underline underline-offset-4 hover:text-primary/80">
            contact us
          </Link>{" "}
          for more information.
        </p>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card overflow-hidden transition-all hover:border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold hover:bg-muted/30 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    "size-4 text-muted-foreground shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/resources/frequently-asked-questions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Read all FAQs <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
