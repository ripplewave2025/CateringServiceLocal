'use client';

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceSignals = [
  "48-hour quote turnarounds for qualified briefs",
  "Disciplined staffing plans for 120 to 800 guest events",
  "Regional execution across Darjeeling hills, Sikkim, and Siliguri",
];

const statCards = [
  { value: "120 to 800", label: "guests managed with tiered pricing logic" },
  { value: "3 zones", label: "Darjeeling, Sikkim, and Siliguri coverage" },
  { value: "1 board", label: "centralized quote and bookings operations" },
];

export default function Hero() {
  return (
    <section className="section-shell pt-6 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel overflow-hidden rounded-[2rem]"
      >
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr,0.95fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <span className="section-kicker">Premium event execution</span>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] text-stone-950 sm:text-6xl lg:text-7xl">
              A premium catering site that sells confidence before the first tasting.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
              Hamro Catering blends warm hospitality with disciplined event operations:
              premium menus, quote intelligence, and execution planning that still works
              when the weather, terrain, and guest count shift.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-amber-50 shadow-xl shadow-stone-900/15 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                Build your quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-900 hover:border-stone-900/25"
              >
                Open ops board
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.35rem] border border-amber-700/15 bg-white/72 p-4 shadow-sm"
                >
                  <p className="font-display text-3xl font-semibold text-stone-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {serviceSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3 text-sm text-stone-700">
                  <CheckCircle2 className="mt-0.5 text-amber-700" size={18} />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="relative min-h-[26rem] overflow-hidden rounded-[1.8rem] bg-stone-900">
              <Image
                src="/premium/hero-wedding.png"
                alt="Premium wedding catering setup"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-amber-50">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-100">
                  <Sparkles size={14} />
                  Signature celebrations
                </div>
                <p className="mt-4 max-w-sm font-display text-3xl leading-tight">
                  Wedding spreads, family feasts, and polished guest flow.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[12.5rem] overflow-hidden rounded-[1.6rem] bg-stone-900">
                <Image
                  src="/premium/buffet-service.png"
                  alt="Buffet line with servers"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 18vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-sm text-amber-50">
                  Live counters, buffet flow, and service sequencing.
                </div>
              </div>

              <div className="dark-panel rounded-[1.6rem] p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-amber-200">
                  <ShieldCheck size={18} />
                </div>
                <h2 className="mt-5 font-display text-3xl text-amber-50">
                  Built for calm execution
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  The site now points clients toward structured quote inputs and gives
                  your team a cleaner operations board instead of a flat brochure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
