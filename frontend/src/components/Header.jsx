import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const isLoggedIn = !!localStorage.getItem("access_token");

  return (
    <header className="grid grid-cols-12 border-b border-line text-xs sm:text-sm">
      <NavLink
        to="/shop/fresh"
        className={({ isActive }) =>
          `col-span-3 sm:col-span-2 border-r border-line p-3 sm:p-4 hover:bg-neutral-50 ${
            isActive ? "bg-neutral-50 font-medium" : ""
          }`
        }
      >
        Shop
      </NavLink>

      <Link
        to="/#contact"
        className="col-span-3 sm:col-span-2 border-r border-line p-3 sm:p-4 hover:bg-neutral-50"
      >
        Contact
      </Link>

      <div className="hidden sm:block sm:col-span-6 border-r border-line" />

      <NavLink
        to="/auth"
        className={({ isActive }) =>
          `col-span-3 sm:col-span-1 border-r border-line p-3 sm:p-4 text-right sm:text-left hover:bg-neutral-50 ${
            isActive ? "bg-neutral-50 font-medium" : ""
          }`
        }
      >
        {isLoggedIn ? "Account" : "Sign in"}
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `col-span-3 sm:col-span-1 p-3 sm:p-4 text-right sm:text-left hover:bg-neutral-50 ${
            isActive ? "bg-neutral-50 font-medium" : ""
          }`
        }
      >
        Cart
      </NavLink>
    </header>
  );
}
