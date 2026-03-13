import Image from "next/image";

const regionCards = [
  {
    title: "Darjeeling hills",
    image: "/premium/darjeeling.png",
    notes: ["Slope-aware transport planning", "Weather buffer built into execution", "Premium family and wedding service"],
  },
  {
    title: "Sikkim",
    image: "/premium/sikkim.png",
    notes: ["Destination-ready guest hospitality", "Tight staging for hotel and estate venues", "Strong fit for receptions and retreats"],
  },
  {
    title: "Siliguri",
    image: "/premium/siliguri.png",
    notes: ["Large-capacity corporate and social events", "Faster procurement and service expansion", "Excellent for high-volume banquet operations"],
  },
];

export default function Regions() {
  return (
    <section id="regions" className="section-shell py-16 sm:py-20">
      <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <div className="max-w-3xl">
          <span className="section-kicker">Coverage map</span>
          <h2 className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
            Regional execution is now part of the sales story.
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-700">
            The site explicitly frames where the team operates and why that matters. That is
            commercially useful because regional logistics are part of the buying decision.
          </p>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-3">
          {regionCards.map((region) => (
            <article key={region.title} className="overflow-hidden rounded-[1.7rem] border border-stone-900/10 bg-white">
              <div className="relative min-h-[15rem]">
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 24vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-3xl text-stone-950">{region.title}</h3>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-stone-600">
                  {region.notes.map((note) => (
                    <p key={note}>- {note}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
