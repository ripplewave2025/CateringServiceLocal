const testimonials = [
  {
    name: "Aakriti and Nikhil",
    meta: "Reception service, Gangtok",
    quote:
      "The team moved like a polished hotel operation. We felt looked after before the first guest arrived.",
  },
  {
    name: "Himalayan Summit Finance",
    meta: "Corporate retreat, Siliguri",
    quote:
      "The biggest difference was the clarity. We got a real plan, not just a menu PDF and vague promises.",
  },
  {
    name: "Green Hills Estate",
    meta: "Weekend private event, Darjeeling",
    quote:
      "Even with weather pressure and a difficult route, the buffet opened on time and stayed elegant all night.",
  },
];

const proofPoints = [
  { value: "48 hrs", label: "quote target for qualified briefs" },
  { value: "1 flow", label: "lead capture to operations board" },
  { value: "0 guesswork", label: "tiered guest pricing and planning" },
];

export default function Testimonials() {
  return (
    <section id="proof" className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
        <div>
          <span className="section-kicker">Trust signals</span>
          <h2 className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
            Premium confidence is a conversion tool.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-stone-700">
            When the site looks refined and the booking flow feels organized, clients
            assume the event day will feel the same. That is the point.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {proofPoints.map((point) => (
              <div key={point.label} className="glass-panel rounded-[1.4rem] p-5">
                <p className="font-display text-3xl text-stone-950">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="dark-panel rounded-[1.7rem] p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-amber-200">Client note</div>
              <p className="mt-5 font-display text-3xl leading-tight text-amber-50">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/8 pt-4 text-sm text-stone-300">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

