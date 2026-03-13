'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  budgetOptions,
  buildQuote,
  formatCurrency,
  sanitizeGuests,
  type BudgetMode,
} from "@/lib/pricing";
import { hasSupabaseCredentials, supabase } from "@/lib/supabaseClient";
import { CalendarDays, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type FormState = {
  hostName: string;
  phone: string;
  email: string;
  eventType: string;
  region: string;
  eventDate: string;
  guests: number;
  budget: BudgetMode;
  serviceStyle: string;
  notes: string;
};

const eventTypes = ["Wedding", "Reception", "Corporate", "Private dining", "Festive gathering"];
const regions = ["Darjeeling hills", "Sikkim", "Siliguri", "Destination venue"];
const serviceStyles = ["Grand buffet", "Live counters", "Plated service", "Hybrid service"];

const inputClassName =
  "w-full rounded-[1.1rem] border border-stone-900/10 bg-white/70 px-4 py-3 text-sm text-stone-900 outline-none ring-0 placeholder:text-stone-400 focus:border-amber-700/35";

const nextMonthDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().slice(0, 10);
};

const isBudgetMode = (value: string | null): value is BudgetMode =>
  value === "essential" || value === "signature" || value === "grand";

export default function BookingPage() {
  const [form, setForm] = useState<FormState>({
    hostName: "",
    phone: "",
    email: "",
    eventType: eventTypes[0],
    region: regions[0],
    eventDate: nextMonthDate(),
    guests: 180,
    budget: "signature",
    serviceStyle: serviceStyles[0],
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestSeed = Number(params.get("g"));
    const budgetSeed = params.get("budget");

    setForm((current) => ({
      ...current,
      guests: Number.isFinite(guestSeed) ? sanitizeGuests(guestSeed) : current.guests,
      budget: isBudgetMode(budgetSeed) ? budgetSeed : current.budget,
    }));
  }, []);

  const quote = buildQuote(form.guests, form.budget);

  const updateForm = <Field extends keyof FormState,>(field: Field, value: FormState[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    if (!supabase) {
      setStatus("error");
      setMessage(
        "Supabase credentials are missing in this repo. The quote flow works, but bookings cannot be stored until the environment variables are configured in the repo root and in Vercel."
      );
      return;
    }

    const clientName = `${form.hostName} (${form.phone})`;
    const eventSummary = `${form.eventType} | ${form.region} | ${form.serviceStyle}`;

    const { error } = await supabase.from("bookings").insert([
      {
        client_name: clientName,
        event_type: eventSummary,
        event_date: form.eventDate,
        guest_count: quote.guestCount,
        tier_guests: quote.tierGuests,
        price_per_head: quote.perHead,
        total_price: quote.subtotal,
        status: "pending",
      },
    ]);

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    setMessage(
      "Booking brief saved. Your team can now pick it up from the operations board with the quote already attached."
    );
  };

  return (
    <>
      <Navbar />
      <main className="section-shell py-10 sm:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <span className="section-kicker">Booking brief</span>
            <h1 className="mt-4 font-display text-5xl text-stone-950 sm:text-6xl">
              Build a cleaner lead for the team to execute.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
              This page is no longer a duplicate of the homepage. It is a real intake flow:
              guest count, budget tier, event style, region, and a quote summary that can land
              directly in your operations board.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.5rem] p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-amber-100">
                  <CalendarDays size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-stone-950">Structured intake</h2>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  The form pre-qualifies the inquiry so your first follow-up is a decision call, not an information chase.
                </p>
              </div>
              <div className="dark-panel rounded-[1.5rem] p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-amber-200">
                  <Sparkles size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-amber-50">Premium framing</h2>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  The same quote logic visible on the homepage continues here, which keeps the client experience coherent.
                </p>
              </div>
            </div>
          </div>

          <aside className="dark-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Live estimate</p>
            <h2 className="mt-3 font-display text-4xl text-amber-50">
              {formatCurrency(quote.grandTotal)}
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              Includes a {formatCurrency(quote.perHead)} per-head service structure, an
              operational reserve of {formatCurrency(quote.opsReserve)}, and an estimated
              staffing requirement of {quote.estimatedStaff}.
            </p>

            <div className="mt-6 grid gap-4 rounded-[1.5rem] bg-white/5 p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Guests</p>
                <p className="mt-2 text-2xl font-semibold text-white">{quote.guestCount}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Tier plan</p>
                <p className="mt-2 text-2xl font-semibold text-white">{quote.tierGuests}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Subtotal</p>
                <p className="mt-2 text-2xl font-semibold text-white">{formatCurrency(quote.subtotal)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Budget tier</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {budgetOptions.find((option) => option.value === form.budget)?.label}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-6 text-stone-300">
              <p>Operationally, this is the handoff packet your team needs to act fast:</p>
              <p>- confirmed geography</p>
              <p>- desired service style</p>
              <p>- target guest load and pricing tier</p>
              <p>- booking date already attached to the lead</p>
            </div>

            {!hasSupabaseCredentials ? (
              <div className="mt-6 rounded-[1.4rem] border border-amber-200/20 bg-amber-200/10 p-4 text-sm leading-6 text-amber-100">
                The app is ready for bookings, but deployment still needs the Supabase environment variables
                set in Vercel for lead storage and dashboard sync.
              </div>
            ) : null}
          </aside>
        </section>

        <section className="mt-10 glass-panel rounded-[2rem] p-6 sm:p-8">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Host name
                <input
                  required
                  value={form.hostName}
                  onChange={(event) => updateForm("hostName", event.target.value)}
                  className={inputClassName}
                  placeholder="Who is hosting the event?"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Phone
                <input
                  required
                  value={form.phone}
                  onChange={(event) => updateForm("phone", event.target.value)}
                  className={inputClassName}
                  placeholder="+91 ..."
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateForm("email", event.target.value)}
                  className={inputClassName}
                  placeholder="name@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Event type
                <select
                  value={form.eventType}
                  onChange={(event) => updateForm("eventType", event.target.value)}
                  className={inputClassName}
                >
                  {eventTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Region
                <select
                  value={form.region}
                  onChange={(event) => updateForm("region", event.target.value)}
                  className={inputClassName}
                >
                  {regions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Event date
                <input
                  required
                  type="date"
                  value={form.eventDate}
                  onChange={(event) => updateForm("eventDate", event.target.value)}
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr,1fr,1fr]">
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Guests
                <input
                  type="number"
                  min={100}
                  max={800}
                  step={10}
                  value={form.guests}
                  onChange={(event) => updateForm("guests", sanitizeGuests(Number(event.target.value)))}
                  className={inputClassName}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Budget tier
                <select
                  value={form.budget}
                  onChange={(event) => updateForm("budget", event.target.value as BudgetMode)}
                  className={inputClassName}
                >
                  {budgetOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Service style
                <select
                  value={form.serviceStyle}
                  onChange={(event) => updateForm("serviceStyle", event.target.value)}
                  className={inputClassName}
                >
                  {serviceStyles.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-stone-700">
              Notes for the team
              <textarea
                rows={5}
                value={form.notes}
                onChange={(event) => updateForm("notes", event.target.value)}
                className={inputClassName}
                placeholder="Venue notes, live counter preferences, timing constraints, VIP service, or logistics concerns."
              />
            </label>

            {message ? (
              <div
                className={`rounded-[1.2rem] p-4 text-sm leading-6 ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-rose-50 text-rose-900"
                }`}
              >
                {message}
              </div>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-stone-600">
                Submission stores the booking brief in Supabase for the dashboard. If the
                environment is not configured, the quote still works but storage is blocked.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-amber-50 hover:-translate-y-0.5 hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Saving brief..." : "Save booking brief"}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}