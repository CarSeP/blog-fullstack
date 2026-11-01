import { Link } from "wouter";

function Navbar() {
  return (
    <nav className="border-t border-parchment-200/60 bg-parchment-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-auto py-2.5 scrollbar-none text-[11px] font-sans uppercase tracking-wider font-semibold">
        <div className="flex items-center space-x-6 whitespace-nowrap">
          <Link
            className="text-terracotta border-b-2 border-terracotta pb-0.5"
            href="#"
          >
            All Topics
          </Link>
          <Link
            className="text-parchment-800/80 hover:text-terracotta transition-colors"
            href="#"
          >
            Culture and Art
          </Link>
          <Link
            className="text-parchment-800/80 hover:text-terracotta transition-colors"
            href="#"
          >
            Technology and Society
          </Link>
          <Link
            className="text-parchment-800/80 hover:text-terracotta transition-colors"
            href="#"
          >
            Design and Space
          </Link>
          <Link
            className="text-parchment-800/80 hover:text-terracotta transition-colors"
            href="#"
          >
            Contemporary Philosophy
          </Link>
          <Link
            className="text-parchment-800/80 hover:text-terracotta transition-colors"
            href="#"
          >
            Lifestyle and Leisure
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
