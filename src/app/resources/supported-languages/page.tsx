import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Supported Languages | spf.io",
  description: "Full list of languages supported by spf.io for captions, translation, and multilingual conversations.",
}

const LANGUAGES = [
  { name: "English", code: "en", support: "Captions, Translation, Conversations" },
  { name: "Spanish", code: "es", support: "Captions, Translation, Conversations" },
  { name: "French", code: "fr", support: "Captions, Translation, Conversations" },
  { name: "German", code: "de", support: "Captions, Translation, Conversations" },
  { name: "Portuguese", code: "pt", support: "Captions, Translation, Conversations" },
  { name: "Japanese", code: "ja", support: "Captions, Translation, Conversations" },
  { name: "Korean", code: "ko", support: "Captions, Translation, Conversations" },
  { name: "Mandarin Chinese", code: "zh", support: "Captions, Translation, Conversations" },
  { name: "Arabic", code: "ar", support: "Captions, Translation, Conversations" },
  { name: "Russian", code: "ru", support: "Captions, Translation, Conversations" },
  { name: "Italian", code: "it", support: "Captions, Translation, Conversations" },
  { name: "Dutch", code: "nl", support: "Captions, Translation, Conversations" },
  { name: "Turkish", code: "tr", support: "Captions, Translation, Conversations" },
  { name: "Vietnamese", code: "vi", support: "Captions, Translation, Conversations" },
  { name: "Thai", code: "th", support: "Translation, Conversations" },
  { name: "Hindi", code: "hi", support: "Translation, Conversations" },
  { name: "Indonesian", code: "id", support: "Translation, Conversations" },
  { name: "Polish", code: "pl", support: "Translation, Conversations" },
  { name: "Swedish", code: "sv", support: "Translation, Conversations" },
  { name: "Danish", code: "da", support: "Translation, Conversations" },
]

export default function SupportedLanguagesPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Supported Languages</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            spf.io supports over 100 languages for captions, translation, and conversations. Here are some of the most commonly used languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {LANGUAGES.map((lang) => (
            <div key={lang.code} className="p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="size-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm">{lang.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{lang.support}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          This is a partial list. Contact us for the full list of supported languages and capabilities.
        </p>
        <Link href="/contact-us">
          <Button variant="outline" className="gap-2">
            Contact us for details <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
