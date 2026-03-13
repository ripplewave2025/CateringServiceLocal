'use client';

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#packages", label: "Packages" },
  { href: "/#operations", label: "Operations" },
  { href: "/#regions", label: "Coverage" },
  { href: "/#proof", label: "Proof" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/8 bg-[rgba(246,239,228,0.84)] backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-700/20 bg-stone-950 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-amber-200">
            HC
          </div>
          <div>
            <p className="font-display text-2xl font-semibold leading-none text-stone-950">
              Hamro Catering
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-stone-500">
              Darjeeling, Sikkim, Siliguri
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-stone-950">
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="rounded-full border border-stone-900/10 px-4 py-2 text-stone-700 hover:border-stone-900/25 hover:text-stone-950"
          >
            Ops board
          </Link>
          <Link
            href="/book"
            className="rounded-full bg-stone-950 px-5 py-2 text-amber-50 shadow-lg shadow-stone-900/10 hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Build your quote
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918972080697"
            className="inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-white/70 px-4 py-2 text-sm font-semibold text-stone-800 hover:border-amber-700/35"
          >
            <Phone size={16} />
            +91 89720 80697
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-900/10 bg-white/70 text-stone-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-stone-900/8 bg-[rgba(250,246,240,0.97)] lg:hidden">
          <div className="section-shell space-y-4 py-5">
            <div className="grid gap-3 text-sm font-medium text-stone-700">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
              <Link href="/dashboard" onClick={closeMenu}>
                Ops board
              </Link>
              <Link href="/login" onClick={closeMenu}>
                Client sign in
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                onClick={closeMenu}
                className="rounded-full bg-stone-950 px-5 py-3 text-center text-sm font-semibold text-amber-50"
              >
                Build your quote
              </Link>
              <a
                href="tel:+918972080697"
                className="rounded-full border border-stone-900/10 px-5 py-3 text-center text-sm font-semibold text-stone-800"
              >
                Call +91 89720 80697
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
