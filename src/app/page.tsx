import Calculator from "@/components/calculator";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Regions from "@/components/regions";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16">
        <Hero />
        <Calculator />
        <Features />
        <Gallery />
        <Regions />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
