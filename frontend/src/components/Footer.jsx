export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-12 border-t border-line text-sm">
      <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-line p-6">
        <p className="text-xs text-neutral-600 mb-3">
          Remember to order beautiful flowers from Kyiv LuxeBouquets.
        </p>
        <input
          className="border border-line w-full p-2 text-sm"
          placeholder="Your Email"
        />
        <button className="mt-3 w-full bg-black text-white py-2 text-xs tracking-wide">
          REMIND
        </button>
      </div>

      <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-line p-6">
        <p className="font-medium mb-2">Contact Us</p>
        <p className="text-xs text-neutral-600">
          15/4 Khreshchatyk Street, Kyiv
        </p>
        <p className="text-xs text-neutral-600 mt-2">+380980999777</p>
        <p className="text-xs text-neutral-600 mt-2">
          Kyiv.Florist.Studio@gmail.com
        </p>
      </div>

      <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-line p-6">
        <p className="font-medium mb-2">Shop</p>
        <ul className="text-xs text-neutral-600 space-y-1">
          <li>All Products</li>
          <li>Fresh Flowers</li>
          <li>Dried Flowers</li>
          <li>Live Plants</li>
          <li>Aroma Candles</li>
        </ul>
      </div>

      <div className="md:col-span-3 p-6">
        <p className="font-medium mb-2">About Us</p>
        <ul className="text-xs text-neutral-600 space-y-1">
          <li>Our story</li>
          <li>Shipping & returns</li>
          <li>Terms & conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </footer>
  );
}
