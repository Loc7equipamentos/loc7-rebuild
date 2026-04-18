import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-black border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <span className="text-white text-xl font-semibold tracking-wide cursor-pointer">
            LOC7
          </span>
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-8 text-sm">

          <Link href="/">
            <span className={`cursor-pointer transition ${
              isActive("/") ? "text-white" : "text-neutral-400 hover:text-white"
            }`}>
              Home
            </span>
          </Link>

          <Link href="/equipamentos/audio">
            <span className={`cursor-pointer transition ${
              location.startsWith("/equipamentos") ? "text-white" : "text-neutral-400 hover:text-white"
            }`}>
              Equipamentos
            </span>
          </Link>

          <Link href="/orcamento">
            <span className="text-neutral-400 hover:text-white cursor-pointer transition">
              Orçamento
            </span>
          </Link>

        </nav>
      </div>
    </header>
  );
}
