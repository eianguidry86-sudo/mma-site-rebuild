"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/shared/Icon";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/demo", label: "Demo" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Allow Escape to dismiss the mobile menu.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-8 items-center" aria-label="Main">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md rounded px-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  : "text-on-surface-variant hover:text-secondary text-label-md font-label-md rounded px-2 py-1 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="md:hidden text-on-surface p-2 -mr-2 rounded-lg hover:bg-black/5 active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
<Icon name={open ? "close" : "menu"} size={24} />
      </button>

      {/* Mobile menu panel */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 top-[72px] bg-on-surface/20 backdrop-blur-sm z-40"
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="md:hidden fixed top-[72px] left-0 right-0 bg-surface border-b border-outline-variant/30 shadow-xl z-50 px-gutter py-4 flex flex-col"
          >
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-secondary font-bold text-body-lg font-body-lg py-3 border-b border-outline-variant/20 last:border-b-0"
                      : "text-on-surface text-body-lg font-body-lg py-3 border-b border-outline-variant/20 last:border-b-0 hover:text-secondary transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
}
