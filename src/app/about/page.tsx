export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-10">
        <h1 className="text-4xl font-bold text-gray-900">About Darjeeling & Sikkim Catering</h1>
      </div>

      <div className="relative z-[-1] flex flex-col place-items-center text-center max-w-3xl mb-16">
        <p className="text-lg leading-relaxed text-gray-700">
          We are a premier catering service dedicated to providing exceptional culinary experiences across the breathtaking regions of Darjeeling, Sikkim, Siliguri, and their charming neighboring areas. With a profound passion for food and an unwavering commitment to excellence, we strive to make every event a truly memorable one.
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-12 mb-20">
        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">Our Story & Philosophy</h2>
          <p className="text-gray-700 text-lg mb-4">
            Born from a love for the rich culinary heritage of the Eastern Himalayas and a desire to serve our local communities, Darjeeling & Sikkim Catering was founded on the principle that great food brings people together. We believe in celebrating local flavors while also offering a diverse range of international cuisines to suit every palate.
          </p>
          <p className="text-gray-700 text-lg">
            Our philosophy revolves around freshness, quality, and creativity. We meticulously source the finest local ingredients, ensuring that every dish we prepare is not only delicious but also supports our local farmers and producers.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Our Commitment to You</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            <li>
              <strong className="font-semibold">Unmatched Quality:</strong> From ingredient selection to final presentation, we uphold the highest standards of quality and hygiene.
            </li>
            <li>
              <strong className="font-semibold">Personalized Service:</strong> We listen to your needs and preferences, crafting custom menus and service plans that perfectly match your event&apos;s vision and budget.
            </li>
            <li>
              <strong className="font-semibold">Local Expertise:</strong> Our deep understanding of local tastes and event logistics in Darjeeling, Sikkim, and Siliguri ensures a smooth and authentic experience.
            </li>
            <li>
              <strong className="font-semibold">Experienced Team:</strong> Our team of skilled chefs, attentive service staff, and experienced event planners are dedicated to flawless execution.
            </li>
            <li>
              <strong className="font-semibold">Sustainability:</strong> We are committed to environmentally responsible practices, minimizing waste, and supporting sustainable sourcing.
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Meet Our Team (Placeholder)</h2>
          <p className="text-gray-700 text-lg">
            Behind every successful event is a passionate team. While we can&apos;t introduce them all here, rest assured that our chefs, event coordinators, and service staff are all dedicated professionals committed to making your catering experience exceptional.
          </p>
          {/* You can add team photos and bios here later */}
        </section>
      </div>

      <div className="text-center mt-10">
        <p className="text-xl font-semibold text-gray-800">We look forward to catering your next event!</p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
