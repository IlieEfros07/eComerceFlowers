import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="grid grid-cols-12 border-b border-line text-xs sm:text-sm">
      <Link
        to="/shop/fresh"
        className="col-span-3 sm:col-span-2 border-r border-line p-3 sm:p-4 hover:bg-neutral-50"
      >
        Shop
      </Link>

      <a
        href="#contact"
        className="col-span-3 sm:col-span-2 border-r border-line p-3 sm:p-4 hover:bg-neutral-50"
      >
        Contact
      </a>

      <div className="hidden sm:block sm:col-span-6 border-r border-line p-4" />

      <div className="col-span-3 sm:col-span-1 border-r border-line p-3 sm:p-4 text-right sm:text-left">
        Sign in
      </div>
      <div className="col-span-3 sm:col-span-1 p-3 sm:p-4 text-right sm:text-left">
        Cart
      </div>
    </header>
  );
}
