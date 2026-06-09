export default function PackagingSystem() {
  return (
    <section id="packaging" className="section bg-white/[0.03]">
      <div className="container">
        <p className="kicker">04 — Packaging System</p>
        <h2 className="h2">The unboxing should feel like entering recovery mode.</h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="mockup min-h-[520px]">
            Open packaging mockup placeholder
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-black">Outer Sleeve</h3>
              <p className="body mt-3">
                Minimal, quiet, premium. Designed to feel more like a wellness
                object than a tech accessory.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black">Inner Tray</h3>
              <p className="body mt-3">
                Band centered like a ritual object, supported by calm messaging
                and setup prompts.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black">Insert Card</h3>
              <p className="body mt-3">
                “Measure the body. Train the mind. Recover completely.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
