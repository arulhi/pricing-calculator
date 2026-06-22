import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | spf.io",
  description: "Find answers to common questions about spf.io's AI translation platform, pricing, supported languages, integrations, and more.",
}

const FAQ_CATEGORIES = [
  {
    category: "General",
    questions: [
      { q: "How do you pronounce spf.io?", a: "It's pronounced \"spiffy-oh\"!" },
      { q: "What is spf.io?", a: "spf.io is an all-in-one AI translation and accessibility platform that helps organizations make events, content, and conversations accessible in 100+ languages." },
      { q: "Who is spf.io for?", a: "spf.io is for churches, conferences, corporations, educational institutions, government agencies, theaters, and any organization that needs to communicate across languages." },
    ],
  },
  {
    category: "Languages & Translation",
    questions: [
      { q: "What languages does spf.io support?", a: "We support over 100 languages for captions and translation, and over 70 languages for speech-to-speech conversations. This includes major languages like English, Spanish, French, German, Chinese, Japanese, Arabic, Korean, Portuguese, Russian, and many more." },
      { q: "How accurate is the automatic translation?", a: "Our AI provides highly accurate real-time translations. Accuracy improves when you use features like manuscript upload, vocabulary fine-tuning, and custom AI models. For critical content, you can use supervised mode with human reviewers." },
      { q: "Can I use my own interpreters?", a: "Yes! spf.io supports human-in-the-loop workflows where professional interpreters can supervise and correct AI output in real-time, or provide traditional interpretation alongside AI." },
    ],
  },
  {
    category: "Technical",
    questions: [
      { q: "Do speakers need any software?", a: "No! Speakers just need to show up and speak. Only the event operator needs access to the spf.io control panel." },
      { q: "What equipment do I need?", a: "For the audience, any device with a modern web browser (smartphone, tablet, or computer). For operators, a computer with internet access. For audio streaming, a good microphone and internet connection." },
      { q: "What streaming platforms does spf.io integrate with?", a: "spf.io integrates with Facebook Live, YouTube, OBS, Vimeo, StreamYard, Twitch, Restream, Brightcove, Resi, BoxCast, Microsoft Teams, Zoom, Google Meet, WebEx, GoToWebinar, and 30+ more platforms." },
      { q: "Can I use spf.io offline?", a: "spf.io requires an internet connection for real-time translation. However, a portable device option is available for locations with limited connectivity." },
    ],
  },
  {
    category: "Events & Usage",
    questions: [
      { q: "Can I use spf.io for in-person events?", a: "Yes! spf.io works for in-person, online, and hybrid events. For in-person events, attendees can view captions on their mobile devices (Audience View) or on public screens (Projector View)." },
      { q: "How many languages can I use at once?", a: "You can translate into any number of languages simultaneously. Our platform supports unlimited language channels per event." },
      { q: "How long does it take to set up?", a: "Most users can set up a basic event in under 30 minutes. We also offer instructor-led training and professional services for complex events." },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      { q: "How does spf.io pricing work?", a: "spf.io operates on a subscription-based model with per-minute billing. You pay for the minutes of translation/interpretation used. Contact us for a custom quote based on your specific needs." },
      { q: "Is there an onboarding fee?", a: "Yes, there is an onboarding fee that includes training, support, and a tech check to ensure your first event runs smoothly." },
      { q: "What is the cancellation policy?", a: "For subscription services, you can cancel at any time. For professional services (interpreters, captioners), cancellation policies depend on the specific arrangement." },
    ],
  },
]

export default function FAQPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">Frequently Asked Questions</h1>

        <div className="space-y-12">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border/40">{cat.category}</h2>
              <div className="space-y-3">
                {cat.questions.map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-border/50 bg-card overflow-hidden">
                    <summary className="flex items-center justify-between p-5 text-sm font-semibold cursor-pointer hover:bg-muted/30 transition-colors list-none">
                      {faq.q}
                      <ChevronDown className="size-4 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-muted/20 text-center">
          <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">Contact our support team for more information.</p>
          <Link href="/contact-us" className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
