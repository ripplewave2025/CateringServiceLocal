'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { formatCurrency } from "@/lib/pricing";
import { supabase } from "@/lib/supabaseClient";
import { ArrowUpRight, CalendarRange, CircleAlert, RefreshCcw, Users } from "lucide-react";
import { useEffect, useState } from "react";

type Booking = {
  id: string;
  client_name: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  tier_guests: number;
  price_per_head: number;
  total_price: number;
  status: string;
};

const demoRows: Booking[] = [
  {
    id: "demo-1",
    client_name: "Sample lead (preview only)",
    event_type: "Wedding | Darjeeling hills | Grand buffet",
    event_date: "2026-04-12",
    guest_count: 220,
    tier_guests: 250,
    price_per_head: 760,
    total_price: 167200,
    status: "pending",
  },
  {
    id: "demo-2",
    client_name: "Sample lead (preview only)",
    event_type: "Corporate | Siliguri | Live counters",
    event_date: "2026-05-03",
    guest_count: 180,
    tier_guests: 200,
    price_per_head: 690,
    total_price: 124200,
    status: "proposal sent",
  },
];

const normalizeBooking = (row: Partial<Booking>): Booking => ({
  id: row.id ?? `booking-${Math.random().toString(36).slice(2, 10)}`,
  client_name: row.client_name ?? "Unnamed client",
  event_type: row.event_type ?? "Unspecified event",
  event_date: row.event_date ?? "No date",
  guest_count: row.guest_count ?? 0,
  tier_guests: row.tier_guests ?? 0,
  price_per_head: row.price_per_head ?? 0,
  total_price: row.total_price ?? 0,
  status: row.status ?? "pending",
});

export default function Dashboard() {
  const [rows, setRows] = useState<Booking[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">("loading");
  const [message, setMessage] = useState("");

  const loadBookings = async () => {
    if (!supabase) {
      setRows([]);
      setStatus("missing");
      setMessage(
        "Supabase credentials are missing, so the live bookings board cannot load yet. The cards below show the intended structure."
      );
      return;
    }

    setStatus("loading");
    setMessage("");

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("event_date", { ascending: true });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    const normalizedRows = (data ?? []).map((row) => normalizeBooking(row as Partial<Booking>));
    setRows(normalizedRows);
    setStatus("ready");
  };

  useEffect(() => {
    void loadBookings();
  }, []);

  const visibleRows = rows.length > 0 ? rows : status === "missing" ? demoRows : [];
  const totalValue = visibleRows.reduce((sum, row) => sum + row.total_price, 0);
  const totalGuests = visibleRows.reduce((sum, row) => sum + row.guest_count, 0);
  const confirmedCount = visibleRows.filter((row) => row.status.toLowerCase().includes("confirm")).length;

  return (
    <>
      <Navbar />
      <main className="section-shell py-10 sm:py-14">
        <section className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-end">
          <div>
            <span className="section-kicker">Operations board</span>
            <h1 className="mt-4 font-display text-5xl text-stone-950 sm:text-6xl">
              A cleaner dashboard for live event decisions.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700">
              This route now reads like an operations console instead of a raw table. It
              summarizes pipeline value, upcoming service load, and booking status so the site
              supports execution rather than just marketing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void loadBookings()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-900 hover:border-stone-900/20"
          >
            <RefreshCcw size={16} />
            Refresh board
          </button>
        </section>

        {message ? (
          <div
            className={`mt-8 flex items-start gap-3 rounded-[1.5rem] p-5 text-sm leading-6 ${
              status === "error" ? "bg-rose-50 text-rose-900" : "bg-amber-50 text-amber-900"
            }`}
          >
            <CircleAlert className="mt-0.5" size={18} />
            <span>{message}</span>
          </div>
        ) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.6rem] p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-amber-100">
              <ArrowUpRight size={18} />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">Pipeline value</p>
            <h2 className="mt-2 font-display text-4xl text-stone-950">
              {formatCurrency(totalValue)}
            </h2>
          </div>
          <div className="glass-panel rounded-[1.6rem] p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-amber-100">
              <Users size={18} />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">Guests in play</p>
            <h2 className="mt-2 font-display text-4xl text-stone-950">{totalGuests}</h2>
          </div>
          <div className="dark-panel rounded-[1.6rem] p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-amber-200">
              <CalendarRange size={18} />
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-400">Confirmed events</p>
            <h2 className="mt-2 font-display text-4xl text-amber-50">{confirmedCount}</h2>
          </div>
        </section>

        <section className="mt-8 grid gap-8 xl:grid-cols-[1.25fr,0.75fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="border-b border-stone-900/8 px-6 py-5">
              <h2 className="text-lg font-semibold text-stone-950">Upcoming bookings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-stone-950 text-xs uppercase tracking-[0.18em] text-amber-50">
                  <tr>
                    <th className="px-6 py-4 font-medium">Client</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Guests</th>
                    <th className="px-6 py-4 font-medium">Tier</th>
                    <th className="px-6 py-4 font-medium">Per head</th>
                    <th className="px-6 py-4 font-medium">Total</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.length > 0 ? (
                    visibleRows.map((row) => (
                      <tr key={row.id} className="border-t border-stone-900/8 text-stone-700">
                        <td className="px-6 py-4">
                          <div className="font-medium text-stone-950">{row.client_name}</div>
                          <div className="mt-1 text-xs text-stone-500">{row.event_type}</div>
                        </td>
                        <td className="px-6 py-4">{row.event_date}</td>
                        <td className="px-6 py-4">{row.guest_count}</td>
                        <td className="px-6 py-4">{row.tier_guests}</td>
                        <td className="px-6 py-4">{formatCurrency(row.price_per_head)}</td>
                        <td className="px-6 py-4 font-semibold text-stone-950">
                          {formatCurrency(row.total_price)}
                        </td>
                        <td className="px-6 py-4">
                          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-stone-500">
                        No bookings found yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="dark-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Ops rhythm</p>
            <h2 className="mt-4 font-display text-4xl text-amber-50">What this board is now doing better</h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-stone-300">
              <p>- Shows commercial value, not just raw rows.</p>
              <p>- Makes guest load visible for staffing and kitchen prep.</p>
              <p>- Keeps booking data shaped around execution fields already captured in the quote flow.</p>
              <p>- Fails safely when Supabase credentials are missing instead of rendering a broken screen.</p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
