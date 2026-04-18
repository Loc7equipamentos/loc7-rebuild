export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        <div className="font-bold text-lg tracking-wide">
          LOC7
        </div>

        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:opacity-70">Home</a>
          <a href="/equipamentos/audio" className="hover:opacity-70">Catálogo</a>
          <a href="/orcamento" className="hover:opacity-70">Orçamento</a>
        </div>

      </div>
    </div>
  );
}
