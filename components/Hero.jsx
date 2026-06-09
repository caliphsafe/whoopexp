export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7dd3fc33,transparent_35%),radial-gradient(circle_at_bottom,#22c55e22,transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="kicker">Speculative Collaboration Concept</p>

          <h1 className="mt-6 text-[17vw] font-black leading-[0.78] tracking-[-0.1em] md:text-[120px] lg:text-[150px]">
            Recovery
            <br />
            Has Two
            <br />
            Sides
          </h1>

          <p className="body mt-8 max-w-2xl">
            A creative direction case study imagining how WHOOP and Calm could
            merge physical performance, mental wellness, product design,
            packaging, app experience, and campaign storytelling into one
            connected recovery system.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#opportunity"
              className="rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-black"
            >
              Enter Case Study
            </a>

            <a
              href="#notes"
              className="rounded-full border border-white/15 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white"
            >
              Director Notes
            </a>
          </div>
        </div>

        <div className="mockup min-h-[540px]">
          Hero product render placeholder
        </div>
      </div>
    </section>
  );
}
