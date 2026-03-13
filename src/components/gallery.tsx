import Image from "next/image";

const galleryItems = [
  {
    title: "Service design",
    description: "Refined buffet presentation and staffing that look premium in person and in photos.",
    image: "/premium/buffet-service.png",
  },
  {
    title: "Back-of-house discipline",
    description: "Preparation, transport, and timing are treated as part of the product, not hidden labor.",
    image: "/premium/kitchen-prep.png",
  },
  {
    title: "Guest delight",
    description: "Premium hospitality becomes visible when lines move well, food stays hot, and hosts stay calm.",
    image: "/premium/happy-hosts.png",
  },
];

export default function Gallery() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
        <div>
          <span className="section-kicker">Visual direction</span>
          <h2 className="mt-4 font-display text-4xl text-stone-950 sm:text-5xl">
            Premium hospitality needs image support that matches the promise.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-stone-700">
            The redesign now uses your existing image library instead of placeholder graphics,
            which gives the site real-world credibility immediately.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.8rem] bg-stone-900">
              <div className="relative min-h-[19rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 28vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-amber-50">
                  <h3 className="font-display text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-200">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
