import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Navigation from "@/components/shared/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://mellow-fenglisu-7e6b1c.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MarketMap Analytics — Location Strategy for Local Businesses",
    template: "%s | MarketMap Analytics",
  },
  description:
    "Turn your customer data into geographic insight. Interactive mapping, demographic analysis, and competitor intelligence for local businesses.",
  openGraph: {
    title: "MarketMap Analytics — Location Strategy for Local Businesses",
    description:
      "Turn your customer data into geographic insight. Interactive mapping, demographic analysis, and competitor intelligence for local businesses.",
    url: SITE_URL,
    siteName: "MarketMap Analytics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketMap Analytics — Location Strategy for Local Businesses",
    description:
      "Turn your customer data into geographic insight. Interactive mapping, demographic analysis, and competitor intelligence for local businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-secondary selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-secondary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>

        <header className="bg-surface/70 backdrop-blur-xl full-width top-0 sticky z-50 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center gap-4 px-gutter py-4 w-full max-w-container-max mx-auto">
            <Link
              href="/"
              className="flex items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              <img
                src="/market-logo.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-headline-md font-headline-md font-bold tracking-tight text-on-surface whitespace-nowrap">
                MarketMap Analytics
              </span>
            </Link>
            <Navigation />
          </div>
        </header>

        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="bg-surface-container-lowest border-t border-outline-variant/30 mt-auto z-10 relative">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 px-gutter max-w-container-max mx-auto w-full">
            <div className="text-on-surface-variant text-label-sm font-label-sm">
              © {new Date().getFullYear()} MarketMap Analytics. All rights
              reserved.
            </div>
            <nav className="flex gap-6" aria-label="Footer">
              <Link
                className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-colors duration-200"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-colors duration-200"
                href="/demo"
              >
                Demo
              </Link>
              <Link
                className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-colors duration-200"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
