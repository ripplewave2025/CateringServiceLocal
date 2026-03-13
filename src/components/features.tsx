import {
  CalendarClock,
  Compass,
  ShieldCheck,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Users,
} from "lucide-react";

const experienceCards = [
  {
    icon: Sparkles,
    title: "Signature celebrations",
    desc: "Wedding feasts, reception dinners, and curated family events with premium presentation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Live food theatre",
    desc: "Counters for momo, grills, chaat, pasta, and chef-led finishing moments that feel premium.",
  },
  {
    icon: Users,
    title: "Executive service teams",
    desc: "Trained service captains, buffet runners, and guest flow management rather than ad hoc staffing.",
  },
];

const operationsSteps = [
  {
    icon: CalendarClock,
    title: "Brief with a decision edge",
    desc: "The site captures date, guest count, budget tier, and region before the team even calls back.",
  },
  {
    icon: Compass,
    title: "Route and terrain planning",
    desc: "Regional coverage is explicit, making hill logistics part of the quote rather than a late surprise.",
  },
  {
    icon: Truck,
    title: "Layered delivery rhythm",
    desc: "Kitchen prep, transport windows, and on-ground setup flow are framed as part of the offer.",
  },
  {
    icon: ShieldCheck,
    title: "Operational calm",
    desc: "Dashboard visibility and consistent booking data reduce missed leads, duplicate calls, and messy handoffs.",
  },
];

export default function Features() {
  return (
    <section id="operations" className="section-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <span className="section-kicker">Experience design</span>
          <h2 className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
            Premium on the front end. Efficient behind the scenes.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-stone-700">
            The redesign is not just visual. It structures your service tiers and the
            way inquiries enter the business, which is what turns a brochure site into
            an operational tool.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {experienceCards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-panel rounded-[1.5rem] p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-amber-100">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {operationsSteps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="dark-panel rounded-[1.6rem] p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-amber-200">
              <Icon size={18} />
            </div>
            <h3 className="mt-5 font-display text-2xl text-amber-50">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
