const bands = [
  "Recovery Band",
  "Sleep Band",
  "Breath Band",
  "Focus Band",
];

export default function ProductSystem() {
  return (
    <section id="product" className="section">
      <div className="container">
        <p className="kicker">03 — Product System</p>
        <h2 className="h2">A band collection built around states of recovery.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {bands.map((band) => (
            <div key={band} className="card">
              <div className="mockup mb-6 min-h-[300px]">
                {band} render placeholder
              </div>
              <h3 className="text-3xl font-black tracking-[-0.05em]">
                {band}
              </h3>
              <p className="body mt-3">
                A Calm-inspired WHOOP band concept using soft-touch materials,
                muted tones, and a recovery-first visual language.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
