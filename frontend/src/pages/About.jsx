import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplitSection from "../components/SplitSection";

export default function About() {
  return (
    <Frame>
      <Header />

      {/* hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line min-h-[520px]">
        <div className="md:col-span-6 md:border-r border-line p-10 sm:p-14 md:p-16 flex flex-col justify-center">
          <p className="uppercase text-xs text-neutral-500 mb-4">Our Story</p>
          <h1 className="text-3xl font-medium mb-4">Kyiv LuxeBouquets</h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
            Discover uniquely crafted bouquets and gifts for any occasion.
            Spread joy with our online flower delivery service.
          </p>

          <div className="flex gap-3 mt-8">
            {["IG", "FB", "TW", "YT"].map((x) => (
              <span
                key={x}
                className="border border-line rounded-full w-9 h-9 flex items-center justify-center text-xs"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="h-[320px] md:h-full bg-neutral-200">
            <img
              src="/img/about-hero.jpg"
              alt="Founder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* founder */}
      <section className="border-b border-line text-center px-6 sm:px-12 md:px-20 py-12 md:py-16">
        <p className="uppercase text-xs text-neutral-500 mb-3">Our Story</p>
        <h2 className="text-xl font-medium mb-4">Our Founder’s Passion</h2>
        <p className="text-sm text-neutral-600 max-w-3xl mx-auto">
          Kyiv LuxeBouquets was founded in 2010 with a deep passion for flowers
          and design. Inspired by timeless elegance, the studio brings beauty
          and craftsmanship into everyday moments.
        </p>
      </section>

      <SplitSection
        image="/img/about-1.jpg"
        title="Expertly Crafted Bouquets"
        text="Each bouquet is composed by skilled florists using premium seasonal flowers with strong attention to texture and balance."
      />

      <SplitSection
        reverse
        image="/img/about-2.jpg"
        title="Bouquets, Gifts & Ambiance"
        text="We curate gifts and home décor pieces to elevate your space — perfect for events, celebrations, and everyday luxury."
      />

      <SplitSection
        image="/img/about-3.jpg"
        title="Making Every Day Special"
        text="We transform everyday moments into memorable experiences through thoughtful design and reliable service."
      />

      <Footer />
    </Frame>
  );
}
