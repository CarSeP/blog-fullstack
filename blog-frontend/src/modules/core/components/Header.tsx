import { Link } from "wouter";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full bg-parchment-50 border-b border-parchment-200 sticky top-0 z-50 shadow-[0_2px_12px_-4px_rgba(45,41,38,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center space-x-1 pl-4 border-l border-parchment-200">
          <Link
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-light rounded border border-terracotta/20 transition-all"
            href="#"
          >
            Home
          </Link>
          <Link
            className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-parchment-800 hover:text-terracotta hover:bg-parchment-100 rounded transition-all"
            href="#"
          >
            Explore
          </Link>
          <Link
            className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-parchment-800 hover:text-terracotta hover:bg-parchment-100 rounded transition-all"
            href="#"
          >
            Authors
          </Link>
        </nav>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
