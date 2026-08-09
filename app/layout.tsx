import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/shared/Navigation";
import SettingsAndAdmin from "@/components/shared/SettingsAndAdmin";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketMap Analytics",
  description: "Next-Gen GIS Platform for Local Businesses",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-ruby-red selection:text-white">
        <header className="bg-surface/70 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
          <div className="flex justify-between items-center px-gutter py-4 w-full max-w-container-max mx-auto">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <img src="/market-logo.png" alt="MarketMap Logo" className="w-8 h-8 object-contain" />
              <span className="text-headline-md font-headline-md font-bold tracking-tight text-on-surface">
                MarketMap Analytics
              </span>
            </div>
            {/* Navigation Links (Desktop) */}
            <Navigation />
            {/* Trailing Actions */}
            <SettingsAndAdmin />
          </div>
        </header>

        {children}

        <footer className="bg-surface-container-lowest full-width py-8 mt-auto border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto w-full z-10 relative">
          <div className="text-on-surface-variant text-label-sm font-label-sm mb-4 md:mb-0">
            © 2024 MarketMap Analytics. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-opacity duration-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-opacity duration-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant text-label-sm font-label-sm hover:text-secondary transition-opacity duration-200"
              href="#"
            >
              API Documentation
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
