import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <Frame>
      <Header />

      {/* HERO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-line">
        {/* Left intro */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-line p-10 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
            Kyiv <br /> LuxeBouquets®
          </h1>

          <p className="mt-6 text-sm text-neutral-600 max-w-md">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion.
            Spread Joy with Our Online Flower Delivery Service
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="h-40 bg-neutral-200">
              <img
                src="/img/hero-left.jpg"
                alt="studio"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <p className="text-xs text-neutral-500">
              Experience the joy of giving with our modern floral studio.
            </p>
          </div>
        </div>

        {/* Right mosaic */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2">
          {[
            {
              title: "Fresh Flowers",
              cta: "Shop now →",
              img: "/img/fresh.png",
            },
            {
              title: "Dried Flowers",
              cta: "← Shop now",
              img: "/img/dried.png",
            },
            { title: "Live Plants", cta: "Shop now →", img: "/img/plants.png" },
            {
              title: "Aroma Candles",
              cta: "← Shop now",
              img: "/img/candles.png",
            },
          ].map((x, i) => (
            <div key={i} className="border-t sm:border-t-0 border-line">
              <div className="border-b border-line p-6 flex items-center justify-between">
                <h3 className="text-base font-medium">{x.title}</h3>
                <button className="text-xs underline">{x.cta}</button>
              </div>
              <div className="p-6 flex items-center justify-center min-h-[220px]">
                <img
                  src={x.img}
                  alt={x.title}
                  className="max-h-[180px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + WHY */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line">
        <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-line p-10 sm:p-12 text-2xl font-medium">
          About us
        </div>
        <div className="md:col-span-6 p-10 sm:p-12">
          <p className="uppercase text-xs text-neutral-500 mb-3">Our story</p>
          <h3 className="text-xl font-medium mb-4">Kyiv LuxeBouquets</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            We are a modern local floral studio specializing in design and
            delivery of unique bouquets, plants and gifts.
          </p>
          <button className="mt-6 border border-line px-6 py-2 text-xs tracking-wide hover:bg-neutral-50">
            LEARN MORE
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line">
        <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-line p-10 sm:p-12 text-2xl font-medium">
          Why choose us ?
        </div>

        <div className="md:col-span-6">
          {[
            [
              "Stylish bouquets by florists",
              "Elegant arrangements with premium fresh flowers.",
            ],
            [
              "On-time delivery",
              "Same-day delivery options available in the city.",
            ],
            ["Safe payment", "Industry-standard secure checkout."],
            [
              "Subscription by your needs",
              "Flexible flower subscriptions that fit your routine.",
            ],
          ].map(([t, d], i) => (
            <div key={i} className="border-t border-line p-8 sm:p-10">
              <h4 className="font-medium mb-2">{t}</h4>
              <p className="text-sm text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="grid grid-cols-1 md:grid-cols-12 border-b border-line"
      >
        <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-line p-10 sm:p-12">
          <h3 className="text-xl font-medium mb-6">To Contact Us</h3>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="border border-line px-4 py-2 w-full text-sm"
              placeholder="+380 XX XXX XX XX"
            />
            <button className="bg-black text-white px-6 py-2 text-xs tracking-wide">
              BOOK A CALL
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-line mt-10 text-sm">
            <div className="sm:border-r border-line p-6">
              <p className="font-medium">Phone</p>
              <p className="text-xs text-neutral-600 mt-2">+380980999777</p>
              <p className="text-xs text-neutral-600">+380980999111</p>
            </div>
            <div className="p-6">
              <p className="font-medium">Address</p>
              <p className="text-xs text-neutral-600 mt-2">
                15/4 Khreshchatyk Street, Kyiv
              </p>
              <p className="text-xs text-neutral-600">
                OPENING HOURS: 8 to 11 PM
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="h-[320px] md:h-full bg-neutral-200">
            <img
              src="/img/store.jpg"
              alt="store"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES (simple) */}
      <section className="border-b border-line">
        <h2 className="text-center py-10 text-xl font-medium">Our Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-line">
          <div className="md:col-span-6 border-b md:border-b-0 md:border-r border-line">
            <div className="h-[340px] bg-neutral-200">
              <img
                src="/img/service1.jpg"
                alt="subscriptions"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 p-12 flex flex-col justify-center items-center text-center">
            <p className="uppercase text-xs text-neutral-500 mb-3">Service</p>
            <h3 className="text-2xl font-medium">Flower Subscriptions</h3>
            <p className="text-sm text-neutral-600 mt-4 max-w-md">
              Flexible bouquet subscription service — up to 30% more profitable
              than one-time purchases.
            </p>
            <button className="mt-6 border border-line px-6 py-2 text-xs tracking-wide hover:bg-neutral-50">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-b border-line py-12 px-6 sm:px-12 text-center">
        <p className="uppercase text-xs text-neutral-500 mb-2">
          Google Reviews
        </p>
        <h3 className="text-2xl font-medium mb-6">Our Clients say</h3>
        <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
          “Ordered flowers online and they were the best bouquet! Impressed
          everyone around. Highly recommend this flower shop!”
        </p>
        <p className="text-xs text-neutral-500 mt-3">— Ronald Richards</p>
        <button className="mt-8 border border-line px-6 py-2 text-xs tracking-wide hover:bg-neutral-50">
          READ REVIEWS
        </button>
      </section>

      <Footer />
    </Frame>
  );
}
