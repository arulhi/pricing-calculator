"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const PRIMARY = "#01aeee"
const LIGHT_BLUE = "#EAF6FB"

type NavItem = {
  label: string
  menu?: "product" | "solutions" | "resources"
}

const NAV_ITEMS: NavItem[] = [
  { label: "Product", menu: "product" },
  { label: "Solutions", menu: "solutions" },
  { label: "Resources", menu: "resources" },
]

function ProductMegaMenu({ close }: { close: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-6xl rounded-2xl border bg-white shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200"
      style={{ borderColor: "#E5E7EB", maxHeight: "450px" }}
    >
      <div className="grid grid-cols-4 h-full" style={{ minHeight: "400px" }}>
        {/* Column 1 – Events */}
        <div className="p-7 flex flex-col">
          <h3 className="text-sm font-bold mb-0.5" style={{ color: "#2D2D2D" }}>Events</h3>
          <p className="text-xs mb-5" style={{ color: "#666" }}>
            Scale and run multilingual events with confidence
          </p>
          <div className="space-y-1 flex-1">
            {[
              { label: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation" },
              { label: "Audio Live Streaming", href: "/products/audio-livestreaming" },
              { label: "Multilingual Polls", href: "/products/multilingual-polls" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2.5 text-sm rounded-lg transition-colors whitespace-nowrap"
                style={{ color: "#2D2D2D", fontWeight: 600 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F5FAFD" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2 – Content */}
        <div className="p-7 flex flex-col" style={{ borderLeft: "1px solid #E5E7EB" }}>
          <h3 className="text-sm font-bold mb-0.5" style={{ color: "#2D2D2D" }}>Content</h3>
          <p className="text-xs mb-5" style={{ color: "#666" }}>
            Accelerate translation management and delivery
          </p>
          <div className="space-y-1 flex-1">
            {[
              { label: "Audio Video Captions & Subtitles", href: "/products/audio-video-captions-and-subtitles" },
              { label: "Document Translation Portal", href: "/products/document-translation-portal" },
              { label: "Slides Translation", href: "/products/slide-translation" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2.5 text-sm rounded-lg transition-colors whitespace-nowrap"
                style={{ color: "#2D2D2D", fontWeight: 600 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F5FAFD" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 – Conversations + CTA */}
        <div className="p-7 flex flex-col" style={{ borderLeft: "1px solid #E5E7EB" }}>
          <h3 className="text-sm font-bold mb-0.5" style={{ color: "#2D2D2D" }}>Conversations</h3>
          <p className="text-xs mb-5" style={{ color: "#666" }}>
            Facilitate seamless multilingual conversations
          </p>
          <div className="space-y-1 flex-1">
            {[
              { label: "Multilingual Conversations", href: "/products/multilingual-conversations" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2.5 text-sm rounded-lg transition-colors whitespace-nowrap"
                style={{ color: "#2D2D2D", fontWeight: 600 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F5FAFD" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Explore all products pill button */}
          <div className="mt-auto pt-4">
            <Link
              href="/products"
              onClick={close}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border-2 transition-all hover:shadow-md whitespace-nowrap"
              style={{ borderColor: PRIMARY, color: PRIMARY, background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F5FAFD" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
            >
              Explore all products
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Column 4 – Right Highlight Panel */}
        <div className="p-7 flex flex-col" style={{ background: LIGHT_BLUE }}>
          {/* Integrations */}
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-1" style={{ color: "#2D2D2D" }}>Integrations</h3>
            <p className="text-xs mb-3 leading-relaxed" style={{ color: "#666" }}>
              Spf.io integrates with streaming platforms you already use and more!
            </p>
            <Link
              href="/products/captioning-translation-integrations"
              onClick={close}
              className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:underline whitespace-nowrap"
              style={{ color: PRIMARY }}
            >
              View all integrations <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="my-4" style={{ borderTop: "1px solid #DDE7EC" }} />

          {/* Custom AI */}
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-1" style={{ color: "#2D2D2D" }}>Custom AI</h3>
            <p className="text-xs mb-3 leading-relaxed" style={{ color: "#666" }}>
              Build custom AI models you need to deliver great multilingual events, content, and conversations.
            </p>
            <Link
              href="/products/ai-customization"
              onClick={close}
              className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:underline whitespace-nowrap"
              style={{ color: PRIMARY }}
            >
              Explore AI adaptation <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionsMegaMenu({ close }: { close: () => void }) {
  const testimonials = [
    {
      quote:
        "I can\u2019t think of a better partner than spf.io for a global event requiring caption and translation in multiple languages at the right cost.",
      name: "Vikas Pota",
      role: "Founder and CEO of T4 Education",
      initials: "VP",
    },
    {
      quote:
        "The translation results are very helpful for translators, so they don\u2019t need to translate from scratch.",
      name: "Maria Fennita",
      role: "Director of Christianity Today Indonesia",
      initials: "MF",
    },
  ]

  const categories = [
    { label: "Church", href: "/solutions/religious" },
    { label: "Conferences", href: "/solutions/conferences" },
    { label: "Corporate Events", href: "/solutions/corporate-events" },
    { label: "Education", href: "/solutions/education" },
    { label: "Government", href: "/solutions/government" },
    { label: "Theater", href: "/solutions/theater" },
  ]

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-5xl rounded-[18px] bg-white overflow-hidden animate-in fade-in duration-200"
      style={{
        boxShadow: "0px 20px 60px rgba(0,0,0,0.08)",
        border: "1px solid #E5E7EB",
        transformOrigin: "top center",
        animation: "none",
      }}
    >
      <div className="flex" style={{ minHeight: "420px" }}>
        {/* Left Section – Customer Stories */}
        <div className="flex-1 p-8" style={{ flexBasis: "62%" }}>
          <h2
            className="font-bold mb-4"
            style={{ color: "#2E2E2E", fontSize: "16px" }}
          >
            Customer Stories
          </h2>

          <div className="space-y-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl transition-all duration-200 hover:shadow-md"
                style={{
                  background: "#EAF5FA",
                  padding: "18px",
                  borderRadius: "10px",
                }}
              >
                <p
                  className="leading-relaxed mb-3"
                  style={{
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div
                    className="rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#00AEEF",
                      color: "#fff",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-xs" style={{ color: "#2E2E2E" }}>
                      {t.name}
                    </div>
                    <div className="text-[11px]" style={{ color: "#666" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/spfio-case-studies"
            onClick={close}
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium transition-all hover:gap-2"
            style={{ color: "#00AEEF" }}
          >
            Explore more stories <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Vertical Divider – 3px brand blue */}
        <div style={{ width: "3px", background: "#00AEEF", minHeight: "100%" }} />

        {/* Right Section – Solutions Categories */}
        <div className="p-8" style={{ flexBasis: "38%" }}>
          <nav className="flex flex-col h-full">
            <div className="space-y-1 flex-1">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={close}
                  className="block px-3 py-2.5 text-sm font-semibold rounded-lg transition-all whitespace-nowrap hover:translate-x-1"
                  style={{
                    color: "#00AEEF",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#0099E6"
                    e.currentTarget.style.background = "#F5FAFD"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#00AEEF"
                    e.currentTarget.style.background = "transparent"
                  }}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href="/solutions"
                onClick={close}
                className="inline-flex items-center justify-center text-sm font-semibold rounded-full border-2 transition-all duration-200 hover:shadow-md whitespace-nowrap"
                style={{
                  borderColor: "#00AEEF",
                  color: "#00AEEF",
                  background: "transparent",
                  padding: "10px 28px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EAF5FA"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                }}
              >
                View all solutions
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

function ResourcesMegaMenu({ close }: { close: () => void }) {
  const col1Links = [
    { label: "Blog", href: "/category/blog" },
    { label: "Case Studies", href: "/spfio-case-studies" },
    { label: "Press Release", href: "/press" },
    { label: "Training Center", href: "https://learn.spf.io" },
  ]

  const col2Links = [
    { label: "Get Started", href: "/resources/documentation" },
    { label: "How do I ...", href: "/resources/documentation/how-do-i" },
    { label: "Troubleshooting Guides", href: "/resources/documentation/help" },
    { label: "Supported Languages", href: "/resources/supported-languages" },
  ]

  const col3Links = [
    { label: "FAQ", href: "/resources/frequently-asked-questions" },
    { label: "Help", href: "/resources/documentation" },
    { label: "Professional Services", href: "/products/professional-services" },
    { label: "Contact Support Team", href: "/contact-us" },
  ]

  const socials = [
    { label: "Facebook", href: "https://facebook.com/spfiotranslate", color: "#1877F2" },
    { label: "YouTube", href: "https://youtube.com/@spfio", color: "#FF0000" },
    { label: "LinkedIn", href: "https://linkedin.com/showcase/spfio", color: "#0A66C2" },
    { label: "Instagram", href: "https://instagram.com/spfiotranslate", color: "#E4405F" },
    { label: "X", href: "https://x.com/spfiotranslate", color: "#000000" },
  ]

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-6xl rounded-[18px] bg-white overflow-hidden animate-in fade-in duration-200"
      style={{
        boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Main 4-column content */}
      <div className="flex" style={{ minHeight: "500px" }}>
        {/* Column 1 – Resources */}
        <div className="flex flex-col p-8" style={{ flex: 1 }}>
          <h2 className="font-bold mb-6" style={{ color: "#2E2E2E", fontSize: "22px" }}>
            Resources
          </h2>
          <div className="space-y-1 flex-1">
            {col1Links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2.5 rounded-lg transition-all whitespace-nowrap hover:translate-x-0.5"
                style={{ color: "#00AEEF", fontSize: "17px", fontWeight: 600 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0098E8"
                  e.currentTarget.style.background = "#F5FAFD"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#00AEEF"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/resources"
              onClick={close}
              className="inline-flex items-center justify-center text-sm font-semibold rounded-full border-2 transition-all duration-200 hover:shadow-md whitespace-nowrap"
              style={{
                borderColor: "#00AEEF",
                color: "#00AEEF",
                background: "transparent",
                padding: "10px 28px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#EAF5FA" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
            >
              Explore all resources
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", background: "#E5E7EB" }} />

        {/* Column 2 – Documentation */}
        <div className="flex flex-col p-8" style={{ flex: 1 }}>
          <h3 className="font-bold mb-6" style={{ color: "#2E2E2E", fontSize: "15px" }}>
            Documentation
          </h3>
          <div className="space-y-1 flex-1">
            {col2Links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2 rounded-lg transition-all whitespace-nowrap hover:translate-x-0.5"
                style={{ color: "#00AEEF", fontSize: "15px", fontWeight: 600 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0098E8"
                  e.currentTarget.style.background = "#F5FAFD"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#00AEEF"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", background: "#E5E7EB" }} />

        {/* Column 3 – Help and Support */}
        <div className="flex flex-col p-8" style={{ flex: 1 }}>
          <h3 className="font-bold mb-6" style={{ color: "#2E2E2E", fontSize: "15px" }}>
            Help and Support
          </h3>
          <div className="space-y-1 flex-1">
            {col3Links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="block px-3 py-2 rounded-lg transition-all whitespace-nowrap hover:translate-x-0.5"
                style={{ color: "#00AEEF", fontSize: "15px", fontWeight: 600 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0098E8"
                  e.currentTarget.style.background = "#F5FAFD"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#00AEEF"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider – 4px brand blue before featured panel */}
        <div style={{ width: "4px", background: "#00AEEF" }} />

        {/* Column 4 – Featured Educational Content Panel */}
        <div
          className="flex flex-col p-8"
          style={{ flex: 1.3, background: "#EAF5FA" }}
        >
          <h3
            className="font-bold leading-snug mb-5"
            style={{ color: "#2E2E2E", fontSize: "20px" }}
          >
            How live AI translation and captions work
          </h3>

          <div
            className="rounded-xl overflow-hidden mb-5"
            style={{
              aspectRatio: "16 / 9",
              background: "linear-gradient(135deg, #00AEEF15 0%, #0098E808 100%)",
              border: "1px solid #D9E3EA",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="size-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: "#00AEEF20" }}>
                  <div className="size-6 rounded" style={{ background: "#00AEEF40" }} />
                </div>
                <p className="text-xs" style={{ color: "#666" }}>AI Captioning Demo</p>
              </div>
            </div>
          </div>

          <Link
            href="/demo"
            onClick={close}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2"
            style={{ color: "#00AEEF" }}
          >
            Learn how spf.io works → <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Bottom Utility Bar */}
      <div
        className="flex items-center justify-between px-8"
        style={{
          height: "72px",
          borderTop: "1px solid #EAEAEA",
          background: "#fff",
        }}
      >
        <span className="text-base font-medium" style={{ color: "#666" }}>
          Connect with us
        </span>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              onClick={close}
              className="flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                width: "44px",
                height: "44px",
                background: `${s.color}10`,
                color: s.color,
                fontSize: "13px",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${s.color}20` }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${s.color}10` }}
            >
              {s.label === "Facebook" ? "F" : s.label === "YouTube" ? "YT" : s.label === "LinkedIn" ? "in" : s.label === "Instagram" ? "IG" : "X"}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActive(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const show = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActive(label)
  }

  const hide = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 120)
  }

  const close = () => setActive(null)

  const menuComponents: Record<string, React.FC<{ close: () => void }>> = {
    product: ProductMegaMenu,
    solutions: SolutionsMegaMenu,
    resources: ResourcesMegaMenu,
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md" style={{ borderBottom: "1px solid #E5E7EB" }}>
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/spfio-logo.png" alt="spf.io" className="h-8 w-auto" />
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const MenuComponent = item.menu ? menuComponents[item.menu] : null
            const isActive = active === item.label
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => show(item.label)}
                onMouseLeave={hide}
              >
                <button
                  onClick={() => setActive(isActive ? null : item.label)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all cursor-pointer",
                    isActive
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  )}
                  style={{ color: isActive ? PRIMARY : "#666" }}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("size-3.5 transition-transform duration-200", isActive && "rotate-180")}
                    style={{ color: isActive ? PRIMARY : "#999" }}
                  />
                </button>

                {isActive && MenuComponent && (
                  <div
                    onMouseEnter={() => show(item.label)}
                    onMouseLeave={hide}
                  >
                    <MenuComponent close={close} />
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/request-a-quote">
            <button
              className="inline-flex items-center justify-center h-9 px-5 text-sm font-semibold rounded-full text-white transition-all hover:shadow-lg active:scale-[0.97]"
              style={{ background: PRIMARY }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0095E8" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = PRIMARY }}
            >
              Request a Quote
            </button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: "#666" }}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-white max-h-[80vh] overflow-y-auto" style={{ borderColor: "#E5E7EB" }}>
          <div className="px-4 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div className="text-sm font-bold px-3 py-2" style={{ color: "#2D2D2D" }}>{item.label}</div>
                {item.menu === "product" && (
                  <div className="ml-2 space-y-3">
                    {[
                      { heading: "Events", items: [{ label: "Automatic Captions & Translation", href: "/products/automatic-captions-and-translation" }, { label: "Audio Live Streaming", href: "/products/audio-livestreaming" }, { label: "Multilingual Polls", href: "/products/multilingual-polls" }] },
                      { heading: "Content", items: [{ label: "Audio Video Captions & Subtitles", href: "/products/audio-video-captions-and-subtitles" }, { label: "Document Translation Portal", href: "/products/document-translation-portal" }, { label: "Slides Translation", href: "/products/slide-translation" }] },
                      { heading: "Conversations", items: [{ label: "Multilingual Conversations", href: "/products/multilingual-conversations" }] },
                    ].map((section) => (
                      <div key={section.heading}>
                        <div className="text-xs font-semibold uppercase tracking-widest px-3 py-1" style={{ color: "#666" }}>{section.heading}</div>
                        {section.items.map((link) => (
                          <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                            style={{ color: "#2D2D2D", fontWeight: 600 }}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link href="/products" onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold rounded-lg"
                      style={{ color: PRIMARY }}>
                      Explore all products →
                    </Link>
                  </div>
                )}
                {item.menu === "solutions" && (
                  <div className="ml-2 grid grid-cols-2 gap-1">
                    {["Church", "Conferences", "Corporate Events", "Education", "Government", "Theater"].map((l) => (
                      <Link key={l} href={`/solutions/${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                        style={{ color: "#2D2D2D", fontWeight: 600 }}>
                        {l}
                      </Link>
                    ))}
                  </div>
                )}
                {item.menu === "resources" && (
                  <div className="ml-2 space-y-1">
                    {["Blog", "Case Studies", "Documentation", "FAQ", "About", "Press", "Contact"].map((l) => (
                      <Link key={l} href={l === "Blog" ? "/category/blog" : l === "Case Studies" ? "/spfio-case-studies" : l === "Documentation" ? "/resources/documentation" : l === "FAQ" ? "/resources/frequently-asked-questions" : `/${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                        style={{ color: "#2D2D2D", fontWeight: 600 }}>
                        {l}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 mt-3 space-y-2" style={{ borderTop: "1px solid #E5E7EB" }}>
              <Link href="/request-a-quote" onClick={() => setMobileOpen(false)}>
                <button className="w-full h-10 text-sm font-semibold rounded-full text-white transition-colors"
                  style={{ background: PRIMARY }}>
                  Request a Quote
                </button>
              </Link>
              <Link href="/demo" onClick={() => setMobileOpen(false)}>
                <button className="w-full h-10 text-sm font-semibold rounded-full border-2 transition-colors"
                  style={{ borderColor: "#E5E7EB", color: "#666" }}>
                  See a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
