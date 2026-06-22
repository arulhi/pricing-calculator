import Link from "next/link"

const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "What is spf.io?", href: "/products" },
      { label: "Demo", href: "/demo" },
      { label: "Integrations", href: "/products/captioning-translation-integrations" },
      { label: "Request a Quote", href: "/request-a-quote" },
      { label: "Blog", href: "/category/blog" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Case Studies", href: "/spfio-case-studies" },
      { label: "Church Translation", href: "/solutions/religious" },
      { label: "Classroom Translation", href: "/solutions/education" },
      { label: "Conference Translation", href: "/solutions/conferences" },
      { label: "Government Translation", href: "/solutions/government" },
      { label: "Theater Accessibility", href: "/solutions/theater" },
      { label: "Corporate Event Translation", href: "/solutions/corporate-events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Remote Gigs", href: "/remote-gigs" },
      { label: "About", href: "/about" },
      { label: "Vision", href: "/category/vision" },
      { label: "Press", href: "/press" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/resources/frequently-asked-questions" },
      { label: "Help", href: "/resources/documentation" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="mb-10">
          <Link href="/" className="inline-block">
            <img src="/spfio-logo.png" alt="spf.io" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TheoTech LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
