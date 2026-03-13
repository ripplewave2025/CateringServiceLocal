import Link from "next/link";

const footerLinks = [
  { href: "/#packages", label: "Packages" },
  { href: "/#operations", label: "Operations" },
  { href: "/#regions", label: "Coverage" },
  { href: "/dashboard", label: "Ops board" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-stone-900/10 bg-white/40">
      <div className="section-shell grid gap-8 py-10 sm:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="font-display text-3xl text-stone-950">Hamro Catering</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">
            Premium wedding, family, and corporate catering designed for polished
            hospitality and cleaner operations across Darjeeling, Sikkim, and Siliguri.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-stone-700">
            <a
              href="tel:+918972080697"
              className="rounded-full border border-stone-900/10 px-4 py-2 hover:border-stone-900/25"
            >
              +91 89720 80697
            </a>
            <Link
              href="/book"
              className="rounded-full bg-stone-950 px-4 py-2 font-semibold text-amber-50 hover:bg-stone-800"
            >
              Start a booking brief
            </Link>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-stone-600 sm:justify-self-end sm:text-right">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-stone-950">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="hover:text-stone-950">
            Client sign in
          </Link>
          <p className="pt-3 text-xs uppercase tracking-[0.22em] text-stone-500">
            © {new Date().getFullYear()} Hamro Catering
          </p>
        </div>
      </div>
    </footer>
  );
}
