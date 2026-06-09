export default function DigitalExperience() {
  return (
    <section className="section">
      <div className="container">
        <p className="kicker">05 — Digital Experience</p>
        <h2 className="h2">From recovery score to recovery ritual.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Morning Recovery", "Breathwork Session", "Sleep Wind Down"].map(
            (screen) => (
              <div key={screen} className="card">
                <div className="mockup mb-6 min-h-[460px]">
                  {screen} app screen placeholder
                </div>
                <h3 className="text-2xl font-black">{screen}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
