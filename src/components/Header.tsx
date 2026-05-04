"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book-now", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-2 w-full bg-brand-green" style={{ background: "#055425" }} />
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container-pad flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Soft Play Rentals NYC">
            <Image src="/assets/images/logo.png" alt="Soft Play Rentals NYC logo" width={80} height={80} priority className="h-14 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((it) => (
              <Link key={it.href} href={it.href} className="text-base text-brand-dark hover:text-brand-deep transition">
                {it.label}
              </Link>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <nav className="container-pad flex flex-col py-4 gap-1">
              {navItems.map((it) => (
                <Link key={it.href} href={it.href} onClick={() => setOpen(false)} className="py-3 text-brand-dark border-b last:border-0">
                  {it.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
