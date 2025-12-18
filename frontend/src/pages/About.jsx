import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplitSection from "../components/SplitSection";

export default function About() {
  return (
    <Frame>
      <Header />

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line min-h-[500px]">
        <div className="md:col-span-6 md:border-r border-line p-16 flex flex-col justify-center">
          <p className="uppercase text-xs text-neutral-500 mb-3">Our Story</p>
          <h1 className="text-3xl mb-4">Kyiv LuxeBouquets</h1>
          <p className="text-sm text-neutral-600 max-w-md">
            Discover uniquely crafted bouquets and gifts for any occasion.
            Spread joy with our modern flower delivery service.
          </p>
        </div>

        <div className="md:col-span-6">
          <img
            src="/img/about-hero.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <SplitSection
        image="/img/about-1.jpg"
        title="Expertly Crafted Bouquets"
        text="Each bouquet is carefully designed by professional florists using premium seasonal flowers."
      />

      <SplitSection
        reverse
        image="/img/about-2.jpg"
        title="Bouquets, Gifts & Ambiance"
        text="We curate gifts and home décor items to elevate every space and moment."
      />

      <SplitSection
        image="/img/about-3.jpg"
        title="Making Every Day Special"
        text="Our mission is to turn everyday moments into unforgettable experiences."
      />

      <Footer />
    </Frame>
  );
}
