"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/demo', label: 'Demo' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex gap-8 items-center">
      {links.map((link) => {
        const isActive = pathname === link.href;
        if (isActive) {
          return (
            <Link
              key={link.label}
              href={link.href}
              className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md hover:bg-surface-container-high/50 transition-all duration-300 rounded px-2"
            >
              {link.label}
            </Link>
          );
        }
        return (
          <Link
            key={link.label}
            href={link.href}
            className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md hover:bg-surface-container-high/50 duration-300 rounded px-2 py-1"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
