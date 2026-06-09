import "./globals.css";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">WHOOP × CALM</div>

        <div className="navLinks">
          <a href="#opportunity">Opportunity</a>
          <a href="#system">System</a>
          <a href="#experience">Experience</a>
          <a href="#notes">Notes</a>
        </div>
      </nav>

      <section className="hero">
  <div className="heroCopy">
    <p className="eyebrow">Speculative Collaboration Concept</p>

    <h1>
      Recovery
      <span>Has Two Sides</span>
    </h1>

    <p className="intro">
      A creative direction case study imagining how WHOOP and Calm could merge
      physical performance, mental wellness, product design, packaging, digital
      behavior, and real-world recovery experiences.
    </p>

    <div className="heroActions">
      <a href="#opportunity">Enter Case Study</a>

      <a href="#notes" className="secondary">
        Director Notes
      </a>
    </div>
  </div>

  <div className="heroImageWrap">
    <img
      src="/images/hero/hero-recovery-has-two-sides.jpg"
      alt="WHOOP x Calm hero campaign concept"
    />
  </div>
</section>

      <section id="opportunity" className="section">
        <p className="eyebrow">01 — The Opportunity</p>

        <h2>WHOOP measures the body. Calm trains the mind.</h2>

        <div className="grid three">
          <Card
            title="WHOOP"
            text="Performance data, strain, recovery, sleep, behavior, and measurable readiness."
          />

          <Card
            title="Calm"
            text="Meditation, breathwork, sleep stories, emotional regulation, and mental wellness."
          />

          <Card
            title="The Space Between"
            text="A complete recovery system where physical readiness and mental state work together."
          />
        </div>
      </section>

      <section id="system" className="section darkPanel">
        <p className="eyebrow">02 — Collaboration System</p>

        <h2>Not just a co-branded band. A full recovery ecosystem.</h2>

        <div className="grid two">
          <Feature
            number="01"
            title="Band Collection"
            text="Recovery Band, Sleep Band, Breath Band, and Focus Band colorways."
          />

          <Feature
            number="02"
            title="Packaging Ritual"
            text="An unboxing experience that feels quiet, intentional, and premium."
          />

          <Feature
            number="03"
            title="App Integration"
            text="WHOOP recovery scores connected to Calm-guided meditation, breathwork, and sleep rituals."
          />

          <Feature
            number="04"
            title="Launch Campaign"
            text="A complete campaign language built around the line: Recovery Has Two Sides."
          />
        </div>
      </section>

      <section id="experience" className="section split">
        <div>
          <p className="eyebrow">03 — Design Language</p>

          <h2>Quiet performance. Soft technology. Human recovery.</h2>

          <p className="body">
            The visual system should feel less like a fitness accessory and more
            like a recovery object: matte materials, stone-inspired colors,
            low-noise layouts, calm gradients, and tactile packaging.
          </p>
        </div>

        <div className="imageWall">
          <ImageCard
            src="/images/product/product-collection-reveal.jpg"
            label="Collection Reveal"
          />

          <ImageCard
            src="/images/packaging/packaging-open-system.jpg"
            label="Packaging System"
          />

          <ImageCard
            src="/images/product/recovery-band-hero.jpg"
            label="Recovery Band"
          />

          <ImageCard
            src="/images/product/sleep-band-hero.jpg"
            label="Sleep Band"
          />

          <ImageCard
            src="/images/product/breath-band-hero.jpg"
            label="Breath Band"
          />

          <ImageCard
            src="/images/product/focus-band-hero.jpg"
            label="Focus Band"
          />
        </div>
      </section>

      <section id="notes" className="section notes">
        <p className="eyebrow dark">Creative Director Notes</p>

        <h2>
          This collaboration works because it expands what recovery means.
        </h2>

        <p>
          The strongest opportunity is not simply putting two logos on a band.
          It is building a system where product, packaging, digital experience,
          campaign language, and physical activations all reinforce one clear
          idea: recovery is both physical and mental.
        </p>
      </section>
    </main>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Feature({ number, title, text }) {
  return (
    <div className="feature">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ImageCard({ src, label }) {
  return (
    <div className="imageCard">
      <img src={src} alt={label} />
      <span>{label}</span>
    </div>
  );
}
