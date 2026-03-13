'use client';

import Link from "next/link";
import { useState } from "react";

import {
  budgetOptions,
  buildQuote,
  formatCurrency,
  sanitizeGuests,
  type BudgetMode,
} from "@/lib/pricing";

export default function Calculator() {
  const [guests, setGuests] = useState(180);
  const [budget, setBudget] = useState<BudgetMode>("signature");

  const quote = buildQuote(guests, budget);

  return (
    <section id="packages" className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
        <div>
          <span className="section-kicker">Quote intelligence</span>
          <h2 className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
            Give clients a premium quote experience before anyone opens WhatsApp.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
            This calculator now behaves like a fast commercial pre-qualification step.
            It frames budget tiers, guest volume, and operational reserve so your team
            starts with sharper leads instead of vague inquiries.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {budgetOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setBudget(option.value)}
                className={`rounded-[1.4rem] border p-5 text-left ${
                  budget === option.value
                    ? "border-amber-700/35 bg-stone-950 text-amber-50 shadow-xl shadow-stone-900/10"
                    : "glass-panel text-stone-900"
                }`}
              >
                <p className="font-semibold">{option.label}</p>
                <p className={`mt-2 text-sm leading-6 ${budget === option.value ? "text-stone-300" : "text-stone-600"}`}>
                  {option.description}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 glass-panel rounded-[1.7rem] p-6">
            <label className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
              Guest volume
            </label>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex-1">
                <input
                  type="range"
                  min={100}
                  max={800}
                  step={10}
                  value={guests}
                  onChange={(event) => setGuests(sanitizeGuests(Number(event.target.value)))}
                  className="w-full accent-stone-950"
                />
                <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                  <span>100 guests</span>
                  <span>800 guests</span>
                </div>
              </div>
              <div className="rounded-[1.4rem] bg-white px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  Recommended brief
                </p>
                <p className="mt-2 font-display text-4xl text-stone-950">{quote.guestCount}</p>
                <p className="mt-1 text-sm text-stone-600">
                  tiered against a {quote.tierGuests}-guest service plan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dark-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                Quote snapshot
              </p>
              <h3 className="mt-3 font-display text-4xl text-amber-50">
                {formatCurrency(quote.subtotal)}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-stone-300">
                Food and service subtotal for {quote.guestCount} guests in the {" "}
                {budgetOptions.find((option) => option.value === budget)?.label.toLowerCase()} {" "}
                tier.
              </p>
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-100">
              Premium planning
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-[1.6rem] bg-white/5 p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Per guest</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(quote.perHead)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Ops reserve</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(quote.opsReserve)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Estimated staff</p>
              <p className="mt-2 text-2xl font-semibold text-white">{quote.estimatedStaff}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Ops total</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {formatCurrency(quote.grandTotal)}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3 text-sm leading-6 text-stone-300">
            <p>Includes buffet architecture, service staff planning, and a built-in logistics buffer.</p>
            <p>
              The next screen captures event type, region, and date so your team can act on the
              lead immediately instead of re-qualifying it manually.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/book?g=${quote.guestCount}&budget=${budget}`}
              className="inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-stone-950 hover:-translate-y-0.5 hover:bg-amber-100"
            >
              Continue with this quote
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-amber-50 hover:border-white/25"
            >
              Review ops board
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
