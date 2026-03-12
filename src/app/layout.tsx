import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Pricing Calculator | Transparent & Scalable",
  description: "Estimate your SaaS subscription costs with our transparent pricing calculator. Choose your plan, users, and add-ons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20`}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.1),transparent)" />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
