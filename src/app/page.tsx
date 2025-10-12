import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: 'url('/catering-hero.jpg')' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Exquisite Catering for Your Special Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Serving Darjeeling, Sikkim, Siliguri, and Neighboring Areas
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full max-w-5xl text-center my-16">
        <h2 className="text-3xl font-bold mb-6">Crafting Unforgettable Culinary Experiences</h2>
        <p className="text-lg leading-relaxed mb-8">
          At [Your Catering Name], we believe every event deserves a menu as unique and memorable as the occasion itself. From intimate gatherings to grand celebrations, our team of culinary experts is dedicated to creating delicious, beautifully presented dishes that will delight your guests.
        </p>
        <p className="text-lg leading-relaxed">
          We specialize in catering to the diverse tastes of Darjeeling, Sikkim, Siliguri, and their charming neighbors, bringing fresh, local, and high-quality ingredients to your table.
        </p>
      </section>

      {/* Services Overview */}
      <section className="w-full max-w-5xl my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Catering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
            <Image src="/wedding.svg" alt="Wedding Catering" width={80} height={80} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Wedding Catering</h3>
            <p>Make your special day even more magical with our bespoke wedding menus.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
            <Image src="/corporate.svg" alt="Corporate Events" width={80} height={80} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
            <p>Impress your clients and colleagues with professional and delicious catering.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg">
            <Image src="/party.svg" alt="Private Parties" width={80} height={80} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
            <p>Celebrate life's moments with exquisite food tailored to your taste.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View All Services
          </a>
        </div>
      </section>

      {/* Call to Action for Menu */}
      <section className="w-full max-w-5xl text-center my-16 bg-gray-100 p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Discover Our Diverse Menu</h2>
        <p className="text-lg leading-relaxed mb-8">
          From local delicacies to international cuisines, our menu is designed to cater to all palates and dietary requirements.
        </p>
        <a
          href="/menu"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Browse Menu
        </a>
      </section>

      {/* Footer / Navigation (simplified as per initial request) */}
      <footer className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Darjeeling & Sikkim Catering
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=app&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Next.js
          </a>
        </div>
      </footer>
    </main>
  );
}
