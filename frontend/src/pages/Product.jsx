import { useMemo, useState } from "react";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";

const vases = [
  { name: "Glass Vase", price: 15, image: "/img/vase1.png" },
  { name: "Harmony", price: 45, image: "/img/vase2.png" },
  { name: "Ceramic Vase", price: 35, image: "/img/vase3.png" },
  { name: "Shine Vase", price: 25, image: "/img/vase4.png" },
  { name: "Bamboo", price: 35, image: "/img/vase5.png" },
];

const related = [
  { name: "Rustic Grapefruit", price: 60, image: "/img/r1.png" },
  { name: "Lime & Matcha", price: 45, image: "/img/r2.png" },
  { name: "Cedar & Lavender", price: 65, image: "/img/r3.png" },
  { name: "Ocean Mist", price: 55, image: "/img/r4.png" },
];

export default function Product() {
  const [qty, setQty] = useState(1);
  const [plan, setPlan] = useState("one-time");
  const [selectedVase, setSelectedVase] = useState(null);

  const basePrice = 100;
  const finalPrice = useMemo(() => {
    const discount = plan === "subscribe" ? 0.75 : 1;
    const vasePrice = selectedVase?.price ?? 0;
    return Math.round((basePrice * discount + vasePrice) * qty);
  }, [plan, selectedVase, qty]);

  return (
    <Frame>
      <Header />

      {/* top product */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-line">
        {/* image */}
        <div className="lg:col-span-7 lg:border-r border-line p-6 sm:p-10 md:p-12 flex items-center justify-center">
          <img
            src="/img/rosy-delight.png"
            alt="Rosy Delight"
            className="max-h-[520px] object-contain"
          />
        </div>

        {/* info */}
        <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
          <p className="text-xs uppercase text-neutral-500">
            Fresh Flowers / Rosy Delight
          </p>

          <div className="flex items-end justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-medium">Rosy Delight</h1>
            <p className="text-sm text-neutral-600">${finalPrice}</p>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Large exceptional bouquet composed of a selection of David Austin
            roses, known for their beauty and subtle fragrance. Seasonal foliage
            enhances elegance.
          </p>

          {/* quantity */}
          <div>
            <p className="text-sm mb-2">Quantity</p>
            <div className="inline-flex items-center border border-line">
              <button
                className="px-4 py-2 hover:bg-neutral-50"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-4 text-sm">{qty}</span>
              <button
                className="px-4 py-2 hover:bg-neutral-50"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* vases */}
          <div>
            <p className="text-sm mb-2">Excellent combination with:</p>

            <div className="flex gap-4 overflow-x-auto pb-2">
              {vases.map((v, i) => {
                const active = selectedVase?.name === v.name;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedVase(active ? null : v)}
                    className={`min-w-[92px] text-center text-xs border border-line p-2 hover:bg-neutral-50 ${
                      active ? "outline outline-1 outline-black" : ""
                    }`}
                  >
                    <img
                      src={v.image}
                      alt={v.name}
                      className="h-16 mx-auto object-contain"
                    />
                    <p className="mt-1">{v.name}</p>
                    <p className="text-neutral-500">${v.price}</p>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-neutral-400 mt-2">Vase not included</p>
          </div>

          {/* price options */}
          <div className="space-y-2 text-sm">
            <p className="text-sm mb-1">Price options:</p>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="price"
                checked={plan === "one-time"}
                onChange={() => setPlan("one-time")}
              />
              One-time purchase. Price $100
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="radio"
                name="price"
                checked={plan === "subscribe"}
                onChange={() => setPlan("subscribe")}
              />
              Subscribe now and save 25% on this order.
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 text-xs tracking-wide">
            ADD TO BASKET
          </button>
        </div>
      </section>

      {/* related */}
      <section className="border-b border-line">
        <h2 className="text-center py-10 text-lg font-medium">
          You may also like…
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
          {related.map((p, i) => (
            <div key={i} className="border-r border-line p-6 text-center">
              <img
                src={p.image}
                alt={p.name}
                className="h-28 mx-auto object-contain"
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
