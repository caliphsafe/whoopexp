export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-black tracking-[-0.04em]">
          WHOOP × CALM
        </a>

        <div className="hidden gap-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55 md:flex">
          <a href="#opportunity">Opportunity</a>
          <a href="#product">Product</a>
          <a href="#packaging">Packaging</a>
          <a href="#campaign">Campaign</a>
        </div>
      </div>
    </nav>
  );
}
