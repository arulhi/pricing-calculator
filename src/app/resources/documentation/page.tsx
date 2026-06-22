import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, HelpCircle, FileQuestion, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Documentation | spf.io",
  description: "Get started with spf.io. Guides, tutorials, troubleshooting, and supported languages for the AI translation platform.",
}

const DOC_SECTIONS = [
  {
    icon: BookOpen,
    title: "Get Started",
    desc: "Quick start guide to set up your first event with spf.io.",
    href: "/resources/documentation/get-started",
  },
  {
    icon: FileQuestion,
    title: "How do I ...",
    desc: "Step-by-step guides for common tasks and workflows.",
    href: "/resources/documentation/how-do-i",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting Guides",
    desc: "Solutions to common issues and error messages.",
    href: "/resources/documentation/help",
  },
  {
    icon: Globe,
    title: "Supported Languages",
    desc: "Full list of languages supported for captions, translation, and conversations.",
    href: "/resources/supported-languages",
  },
]

export default function DocumentationPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Documentation</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to get started with spf.io. From quick start guides to in-depth tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOC_SECTIONS.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.desc}</p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-muted/20 text-center">
          <h3 className="text-xl font-bold mb-3">Need additional help?</h3>
          <p className="text-sm text-muted-foreground mb-4">Visit our FAQ or contact our support team.</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/resources/frequently-asked-questions">
              <Button variant="outline">View FAQ</Button>
            </Link>
            <Link href="/contact-us">
              <Button>Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
