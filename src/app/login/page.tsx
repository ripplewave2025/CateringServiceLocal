'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { hasSupabaseCredentials, supabase } from "@/lib/supabaseClient";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inputClassName =
  "w-full rounded-[1.1rem] border border-stone-900/10 bg-white/70 px-4 py-3 text-sm text-stone-900 outline-none placeholder:text-stone-400 focus:border-amber-700/35";

export default function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setMessage("");
    setIsError(false);

    if (!supabase) {
      setPending(false);
      setIsError(true);
      setMessage(
        "Supabase credentials are not configured in this repo, so authentication cannot complete yet."
      );
      return;
    }

    try {
      if (mode === "up") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name, phone } },
        });

        if (error) {
          throw error;
        }

        setMessage("Account created. Check email verification settings, then sign in.");
        setMode("in");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
          throw error;
        }

        router.push("/dashboard");
      }
    } catch (error: unknown) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Unexpected authentication error.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="section-shell py-10 sm:py-14">
        <section className="grid gap-8 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="dark-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Client access</p>
            <h1 className="mt-4 font-display text-5xl text-amber-50 sm:text-6xl">
              A polished sign-in flow for premium service clients.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
              Authentication is now framed as part of the hospitality experience. It gives
              repeat clients and your internal team a clean path to bookings and the ops board.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.4rem] bg-white/6 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-amber-200">
                  <ShieldCheck size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">Operational access</h2>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  Sign-in sends the user into the dashboard instead of leaving them on a basic form with no next step.
                </p>
              </div>
              <div className="rounded-[1.4rem] bg-white/6 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-amber-200">
                  <LockKeyhole size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">Safer failure state</h2>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  If Supabase is not configured, the page explains the problem instead of failing unpredictably.
                </p>
              </div>
            </div>

            {!hasSupabaseCredentials ? (
              <div className="mt-8 rounded-[1.4rem] border border-amber-200/20 bg-amber-200/10 p-4 text-sm leading-6 text-amber-100">
                Authentication still depends on the same `NEXT_PUBLIC_SUPABASE_*` variables being set in the repo root and in Vercel.
              </div>
            ) : null}
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="section-kicker">{mode === "up" ? "Create access" : "Welcome back"}</p>
            <h2 className="mt-4 font-display text-4xl text-stone-950">
              {mode === "up" ? "Open a client account" : "Sign in to your dashboard"}
            </h2>

            <form onSubmit={submit} className="mt-8 grid gap-4">
              {mode === "up" ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    Full name
                    <input
                      className={inputClassName}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    Phone
                    <input
                      className={inputClassName}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </label>
                </div>
              ) : null}

              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Email
                <input
                  className={inputClassName}
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-stone-700">
                Password
                <input
                  className={inputClassName}
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {message ? (
                <div
                  className={`rounded-[1.2rem] p-4 text-sm leading-6 ${
                    isError ? "bg-rose-50 text-rose-900" : "bg-emerald-50 text-emerald-900"
                  }`}
                >
                  {message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={pending}
                className="mt-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-amber-50 hover:-translate-y-0.5 hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending
                  ? "Working..."
                  : mode === "up"
                    ? "Create account"
                    : "Sign in"}
              </button>
            </form>

            <button
              type="button"
              className="mt-5 text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 hover:text-stone-950"
              onClick={() => setMode((current) => (current === "up" ? "in" : "up"))}
            >
              {mode === "up" ? "Already have access? Sign in." : "Need an account? Create one."}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
