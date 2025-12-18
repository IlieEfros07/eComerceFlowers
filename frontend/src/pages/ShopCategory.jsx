import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  { name: "Snowfall", price: 70, image: "/img/p1.png" },
  { name: "Dawn’s Delight", price: 75, image: "/img/p2.png" },
  { name: "Pink Elegance", price: 70, image: "/img/p3.png" },
  { name: "Rustic Charm", price: 75, image: "/img/p4.png" },
  { name: "Autumn Symphony", price: 70, image: "/img/p5.png" },
  { name: "Rosy Delight", price: 70, image: "/img/p6.png" },
  { name: "Serenity", price: 95, image: "/img/p7.png" },
  { name: "Blue Harmony", price: 55, image: "/img/p8.png" },
  { name: "Mystical Majesty", price: 80, image: "/img/p9.png" },
  { name: "Blazing Blossoms", price: 70, image: "/img/p10.png" },
];

export default function ShopCategory() {
  return (
    <Frame>
      <Header />

      <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-line min-h-[760px]">
        {/* Left big category image */}
        <div className="lg:col-span-6 lg:border-r border-line relative min-h-[320px] lg:min-h-[760px]">
          <img
            src="/img/fresh-hero.jpg"
            alt="Fresh Flowers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <h1 className="absolute bottom-10 left-8 sm:left-10 text-white text-3xl sm:text-4xl font-medium">
            Fresh Flowers
          </h1>
        </div>

        {/* Right product grid */}
        <div className="lg:col-span-6 grid grid-cols-2">
          {products.map((p, i) => (
            <div
              key={i}
              className="border-t border-line p-5 sm:p-6 flex flex-col items-center text-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
              />
              <p className="mt-3 text-sm">{p.name}</p>
              <p className="text-xs text-neutral-500">price {p.price}$</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </Frame>
  );
}
