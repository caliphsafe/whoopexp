import "./globals.css";

const images = {
  hero: "/images/hero/hero-recovery-has-two-sides.jpg",
  packaging: "/images/packaging/packaging-open-system.jpg",
  collection: "/images/product/product-collection-reveal.jpg",
  recovery: "/images/product/recovery-band-hero.jpg",
  sleep: "/images/product/sleep-band-hero.jpg",
  breath: "/images/product/breath-band-hero.jpg",
  focus: "/images/product/focus-band-hero.jpg",
};

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">WHOOP × CALM</div>

        <div className="navLinks">
          <a href="#vision">Vision</a>
          <a href="#product">Product</a>
          <a href="#packaging">Packaging</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      </nav>

      <section id="vision" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Speculative Collaboration Pitch</p>

          <h1>
            Recovery
            <span>Has Two Sides</span>
          </h1>

          <p className="intro">
            A creative direction case study showing how WHOOP and Calm could
            connect physical performance, mental wellness, product design,
            packaging, digital behavior, and real-world recovery experiences.
          </p>

          <div className="heroActions">
            <a href="#thesis">View the Pitch</a>

            <a href="#notes" className="secondary">
              Director Notes
            </a>
          </div>
        </div>

        <ImageHero src={images.hero} alt="WHOOP x Calm hero campaign" />
      </section>

      <DeckSlide
        id="thesis"
        number="01"
        eyebrow="The Thesis"
        title="WHOOP measures the body. Calm trains the mind."
        body="The opportunity is not a co-branded accessory. It is a recovery system that treats performance as both physical and mental."
      />

      <section id="opportunity" className="section">
        <p className="eyebrow">02 — Why This Collaboration Works</p>

        <h2>Both brands already live inside the recovery moment.</h2>

        <div className="grid three">
          <Card
            title="WHOOP"
            text="Owns strain, sleep, HRV, recovery, readiness, and measurable performance behavior."
          />

          <Card
            title="Calm"
            text="Owns meditation, sleep stories, breathwork, emotional regulation, and mental wellness."
          />

          <Card
            title="The Bridge"
            text="Recovery becomes a complete behavior system: measure the body, train the mind, recover completely."
          />
        </div>
      </section>

      <section id="territory" className="section darkPanel">
        <p className="eyebrow">03 — Creative Territory</p>

        <h2>Quiet performance. Soft technology. Human recovery.</h2>

        <div className="grid two">
          <Feature
            number="01"
            title="Measurable"
            text="The WHOOP side brings precision, biometric intelligence, discipline, and performance credibility."
          />

          <Feature
            number="02"
            title="Emotional"
            text="The Calm side brings softness, breath, sleep, mindfulness, and a more human recovery language."
          />

          <Feature
            number="03"
            title="Material"
            text="Warm stone, cloud white, mist blue, midnight navy, woven textiles, soft-touch packaging, and refined titanium."
          />

          <Feature
            number="04"
            title="Systemic"
            text="Every touchpoint should feel connected: product, packaging, app, campaign, launch experience, and retail."
          />
        </div>
      </section>

      <section id="product" className="section imageSection">
        <div>
          <p className="eyebrow">04 — Product System</p>

          <h2>A band collection built around states of recovery.</h2>

          <p className="body">
            Each band is more than a colorway. It represents a different
            recovery behavior: restore, sleep, regulate, and focus.
          </p>
        </div>

        <ImageHero src={images.collection} alt="WHOOP x Calm band collection" />
      </section>

      <ProductSlide
        number="05"
        title="Recovery Band"
        body="The flagship product. Warm sand tones, woven texture, and technical detailing position recovery as grounded, physical, and measurable."
        src={images.recovery}
      />

      <ProductSlide
        number="06"
        title="Sleep Band"
        body="A nighttime expression of the system. Midnight navy, moonlit architecture, and stillness communicate sleep as the foundation of readiness."
        src={images.sleep}
      />

      <ProductSlide
        number="07"
        title="Breath Band"
        body="The bridge between WHOOP data and Calm behavior. Mist blue, flowing forms, and atmospheric movement express regulation through breath."
        src={images.breath}
      />

      <ProductSlide
        number="08"
        title="Focus Band"
        body="The performance expression. Cloud white, cleaner geometry, and focused light create a product language around clarity and flow state."
        src={images.focus}
      />

      <section id="packaging" className="section imageSection darkPanel">
        <div>
          <p className="eyebrow">09 — Packaging System</p>

          <h2>The unboxing should feel like entering recovery mode.</h2>

          <p className="body">
            The packaging turns setup into ritual: outer sleeve, sculpted tray,
            welcome card, recovery guide, and onboarding materials all support
            one idea.
          </p>
        </div>

        <ImageHero src={images.packaging} alt="WHOOP x Calm packaging system" />

        <div className="grid three packagingGrid">
          <Card
            title="Outer Box"
            text="Soft-touch, stone-inspired packaging introduces calm, silence, and premium restraint."
          />

          <Card
            title="Sculpted Tray"
            text="The band is centered like a recovery object, reinforcing precision and intention."
          />

          <Card
            title="Welcome System"
            text="Printed materials explain the philosophy: measure the body, train the mind, recover completely."
          />
        </div>
      </section>

      <section id="digital" className="section">
        <p className="eyebrow">10 — Digital Experience</p>

        <h2>From recovery score to recovery ritual.</h2>

        <div className="grid two">
          <Feature
            number="01"
            title="Morning Recovery"
            text="WHOOP recovery data recommends a Calm session based on sleep, HRV, and strain."
          />

          <Feature
            number="02"
            title="Guided Breathwork"
            text="Stress signals become actionable recovery moments through breathwork sessions."
          />

          <Feature
            number="03"
            title="Sleep Wind Down"
            text="Sleep debt and recovery trends connect directly to Calm sleep stories and evening rituals."
          />

          <Feature
            number="04"
            title="Behavior Loop"
            text="The app experience closes the loop between biometric insight and mental wellness action."
          />
        </div>
      </section>

      <section id="campaign" className="section darkPanel">
        <p className="eyebrow">11 — Launch Campaign</p>

        <h2>Recovery Has Two Sides.</h2>

        <div className="grid three">
          <Card
            title="Campaign Film"
            text="A visual story moving between body data, breath, sleep, and mental readiness."
          />

          <Card
            title="OOH + Social"
            text="Minimal campaign layouts with large negative space, product imagery, and direct recovery language."
          />

          <Card
            title="Seeding Kit"
            text="A premium influencer and press kit that turns the unboxing into a guided recovery experience."
          />
        </div>
      </section>

      <section id="activation" className="section">
        <p className="eyebrow">12 — Physical Activation</p>

        <h2>Bring recovery into the real world.</h2>

        <div className="grid three">
          <Card
            title="Recovery Pods"
            text="Architectural spaces for guided breathwork, recovery education, and product trial."
          />

          <Card
            title="Performance Events"
            text="Marathons, training facilities, and wellness festivals become places to demonstrate the system."
          />

          <Card
            title="Retail Experience"
            text="A calm, tactile environment where customers understand the product before they wear it."
          />
        </div>
      </section>

      <section id="roadmap" className="section darkPanel">
        <p className="eyebrow">13 — Execution Roadmap</p>

        <h2>How this would move across the company.</h2>

        <div className="timeline">
          <Roadmap
            phase="01"
            title="Strategy"
            text="Define the collaboration thesis, audience overlap, success metrics, product story, and launch goals."
          />

          <Roadmap
            phase="02"
            title="Design"
            text="Develop product colorways, packaging architecture, digital experience concepts, campaign visuals, and motion language."
          />

          <Roadmap
            phase="03"
            title="Product + App"
            text="Translate the idea into wearable materials, app integrations, onboarding flows, and Calm content pathways."
          />

          <Roadmap
            phase="04"
            title="Marketing"
            text="Build launch film, social, PR kit, email, OOH, retail, and creator campaign assets from one creative system."
          />

          <Roadmap
            phase="05"
            title="Experience"
            text="Extend the collaboration into pop-ups, recovery pods, athlete activations, retail displays, and live demos."
          />
        </div>
      </section>

      <section id="notes" className="section notes">
        <p className="eyebrow dark">Creative Director Notes</p>

        <h2>This project is designed to show the job being done.</h2>

        <p>
          The goal is not to prove that a collaboration could look beautiful.
          The goal is to show how a creative director can connect brand
          strategy, industrial design, packaging, digital product, campaign
          storytelling, and cross-functional execution into one clear system.
        </p>
      </section>

      <footer className="footer">
        WHOOP × Calm — Speculative Creative Direction Case Study
      </footer>
    </main>
  );
}

function ImageHero({ src, alt }) {
  return (
    <div className="heroImageWrap">
      <img src={src} alt={alt} />
    </div>
  );
}

function ProductSlide({ number, title, body, src }) {
  return (
    <section className="section productSlide">
      <div>
        <p className="eyebrow">{number} — Product Detail</p>
        <h2>{title}</h2>
        <p className="body">{body}</p>
      </div>

      <ImageHero src={src} alt={title} />
    </section>
  );
}

function DeckSlide({ id, number, eyebrow, title, body }) {
  return (
    <section id={id} className="section deckSlide">
      <p className="eyebrow">
        {number} — {eyebrow}
      </p>

      <h2>{title}</h2>

      <p className="deckBody">{body}</p>
    </section>
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

function Roadmap({ phase, title, text }) {
  return (
    <div className="roadmapItem">
      <span>{phase}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
