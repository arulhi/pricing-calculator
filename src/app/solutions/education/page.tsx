import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Globe, BookOpen, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Classroom & Education Translation | spf.io",
  description: "Make classrooms accessible to every student with real-time captions and translations for lectures, discussions, and course materials.",
}

export default function EducationPage() {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 text-sm text-muted-foreground mb-6">
            <GraduationCap className="size-3.5" />
            Solution for Education
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Make every classroom accessible
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Reach international students, support multilingual classrooms, and provide accessibility
            for deaf and hard-of-hearing students with real-time captions and translations.
          </p>
          <Link href="/request-a-quote">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "International Students", desc: "Support students who are learning in a non-native language with real-time translation of lectures." },
            { icon: BookOpen, title: "Course Materials", desc: "Translate slides, documents, and video content into multiple languages for broader access." },
            { icon: Users, title: "Inclusive Discussions", desc: "Enable multilingual classroom discussions where every student can participate in their preferred language." },
          ].map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
