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

const productBands = [
  {
    name: "Recovery Band",
    role: "Restore",
    color: "Warm Sand",
    image: images.recovery,
    copy:
      "The flagship band. Built around physical recovery, readiness, and the daily ritual of understanding the body.",
  },
  {
    name: "Sleep Band",
    role: "Recover",
    color: "Midnight Navy",
    image: images.sleep,
    copy:
      "A night-focused expression connecting WHOOP sleep data to Calm wind-down rituals and sleep content.",
  },
  {
    name: "Breath Band",
    role: "Regulate",
    color: "Mist Blue",
    image: images.breath,
    copy:
      "The bridge between stress signals and action. WHOOP detects the moment. Calm guides the reset.",
  },
  {
    name: "Focus Band",
    role: "Perform",
    color: "Cloud White",
    image: images.focus,
    copy:
      "Designed around mental clarity, flow state, and the moments before performance.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">WHOOP × CALM</div>

        <div className="navLinks">
          <a href="#business">Business</a>
          <a href="#product">Product</a>
          <a href="#digital">Digital</a>
          <a href="#execution">Execution</a>
        </div>
      </nav>

      <section className="deckHero">
        <div className="deckMeta">Speculative Collaboration Pitch</div>

        <h1>
          Recovery
          <span>Has Two Sides</span>
        </h1>

        <p className="heroStatement">
          A creative direction system for how WHOOP and Calm could connect
          physical performance, mental wellness, product design, packaging,
          digital behavior, marketing assets, and real-world recovery
          experiences.
        </p>

        <div className="heroImage">
          <img src={images.hero} alt="WHOOP x Calm hero concept" />
        </div>
      </section>

      <section className="pitchSlide statementSlide">
        <span className="slideNumber">01</span>
        <p className="eyebrow">Opening Thesis</p>

        <h2>
          Recovery is no longer just a score. It is a system of body, mind,
          behavior, and environment.
        </h2>

        <p>
          The opportunity is to move beyond a co-branded wearable and create a
          complete recovery platform where WHOOP provides the biometric truth and
          Calm provides the guided response.
        </p>
      </section>

      <section id="business" className="pitchSlide">
        <span className="slideNumber">02</span>
        <p className="eyebrow">Business Case</p>

        <div className="splitDeck">
          <div>
            <h2>Why this collaboration makes strategic sense.</h2>
            <p className="body">
              WHOOP members already care about recovery, sleep, strain, and
              readiness. Calm users already care about mindfulness, sleep,
              breathwork, and emotional regulation. The overlap is not audience
              only. It is behavior.
            </p>
          </div>

          <div className="insightGrid">
            <Insight title="Shared Moment" text="The recovery window after strain, poor sleep, high stress, or emotional fatigue." />
            <Insight title="Shared Behavior" text="Daily rituals that help people become more prepared for tomorrow." />
            <Insight title="Shared Value" text="A premium subscription relationship built around self-improvement." />
            <Insight title="Shared Opportunity" text="Turn passive data into guided recovery action." />
          </div>
        </div>
      </section>

      <section className="pitchSlide darkSlide">
        <span className="slideNumber">03</span>
        <p className="eyebrow">Brand Intersection</p>

        <h2>WHOOP brings the measurement. Calm brings the method.</h2>

        <div className="brandMatrix">
          <div>
            <h3>WHOOP</h3>
            <ul>
              <li>Recovery score</li>
              <li>Sleep and strain</li>
              <li>HRV and readiness</li>
              <li>Performance behavior</li>
              <li>Wearable discipline</li>
            </ul>
          </div>

          <div className="intersection">+</div>

          <div>
            <h3>Calm</h3>
            <ul>
              <li>Breathwork</li>
              <li>Meditation</li>
              <li>Sleep stories</li>
              <li>Emotional regulation</li>
              <li>Mental wellness rituals</li>
            </ul>
          </div>
        </div>

        <div className="systemLine">
          Together: measurable recovery rituals.
        </div>
      </section>

      <section className="pitchSlide">
        <span className="slideNumber">04</span>
        <p className="eyebrow">Creative Platform</p>

        <h2>Recovery Has Two Sides.</h2>

        <div className="twoColumnCards">
          <div className="largeCard">
            <span>Physical Side</span>
            <h3>Measured by WHOOP</h3>
            <p>HRV, strain, sleep, readiness, recovery, body signals.</p>
          </div>

          <div className="largeCard soft">
            <span>Mental Side</span>
            <h3>Guided by Calm</h3>
            <p>Breath, stillness, focus, regulation, sleep rituals.</p>
          </div>
        </div>
      </section>

      <section id="product" className="pitchSlide imageLedSlide">
        <span className="slideNumber">05</span>
        <p className="eyebrow">Product System</p>

        <h2>A band collection built around recovery behaviors.</h2>

        <p className="body narrow">
          Each band is not just a colorway. Each band represents a different
          behavior in the recovery loop.
        </p>

        <div className="wideImage">
          <img src={images.collection} alt="WHOOP x Calm product collection" />
        </div>
      </section>

      <section className="productStory">
        {productBands.map((band, index) => (
          <article className="productPanel" key={band.name}>
            <div className="productCopy">
              <span className="slideNumber small">
                {String(index + 6).padStart(2, "0")}
              </span>
              <p className="eyebrow">{band.role}</p>
              <h2>{band.name}</h2>
              <p>{band.copy}</p>

              <div className="specPills">
                <span>{band.color}</span>
                <span>Woven Textile</span>
                <span>Titanium Detail</span>
              </div>
            </div>

            <div className="productImage">
              <img src={band.image} alt={band.name} />
            </div>
          </article>
        ))}
      </section>

      <section id="packaging" className="pitchSlide imageLedSlide darkSlide">
        <span className="slideNumber">10</span>
        <p className="eyebrow">Packaging System</p>

        <h2>The unboxing becomes the first recovery ritual.</h2>

        <p className="body narrow">
          Packaging is where the collaboration becomes tactile. The materials,
          tray, card language, onboarding, and product reveal all have to
          support the same story.
        </p>

        <div className="wideImage">
          <img src={images.packaging} alt="WHOOP x Calm packaging system" />
        </div>

        <div className="packagingBreakdown">
          <Insight title="Outer Sleeve" text="Soft-touch paper and warm stone tones introduce Calm’s restraint and silence." />
          <Insight title="Sculpted Tray" text="The product is centered like a precision recovery object, reinforcing WHOOP’s discipline." />
          <Insight title="Welcome Card" text="Sets the philosophy: measure the body, train the mind, recover completely." />
          <Insight title="Activation Card" text="Connects the wearable setup to Calm content, app onboarding, and subscription unlocks." />
        </div>
      </section>

      <section id="digital" className="pitchSlide">
        <span className="slideNumber">11</span>
        <p className="eyebrow">Digital Experience</p>

        <h2>Turn biometric insight into guided recovery action.</h2>

        <div className="journeyGrid">
          <JourneyStep
            number="01"
            title="Signal"
            text="WHOOP detects low recovery, poor sleep, elevated stress, or high strain."
          />
          <JourneyStep
            number="02"
            title="Recommendation"
            text="The app recommends the right Calm behavior: breathwork, sleep story, meditation, or focus session."
          />
          <JourneyStep
            number="03"
            title="Ritual"
            text="The member completes a guided session directly connected to their recovery state."
          />
          <JourneyStep
            number="04"
            title="Feedback Loop"
            text="The next day’s WHOOP data shows how behavior, sleep, and stress regulation connect."
          />
        </div>
      </section>

      <section className="pitchSlide darkSlide">
        <span className="slideNumber">12</span>
        <p className="eyebrow">Marketing System</p>

        <h2>A campaign built from one sentence.</h2>

        <div className="campaignLine">Recovery Has Two Sides</div>

        <div className="grid three">
          <Insight title="Hero Film" text="Body signals and mental rituals moving in parallel." />
          <Insight title="OOH" text="Large negative space, product hero imagery, direct copy, premium restraint." />
          <Insight title="Social Assets" text="Short-form visuals showing different recovery states across the band collection." />
          <Insight title="Email + App" text="Launch flows that explain the value of the system, not just the product." />
          <Insight title="Press Kit" text="A premium seeding experience for creators, athletes, wellness voices, and media." />
          <Insight title="Retail Graphics" text="Material, packaging, and app story translated into physical sales environments." />
        </div>
      </section>

      <section className="pitchSlide">
        <span className="slideNumber">13</span>
        <p className="eyebrow">Physical Activation</p>

        <h2>Make recovery something people can enter.</h2>

        <div className="activationCards">
          <ExperienceCard title="Recovery Pods" text="Architectural mini spaces for guided breathwork, product trial, and recovery education." />
          <ExperienceCard title="Marathon Recovery Lounge" text="Post-race space where WHOOP data informs guided Calm sessions." />
          <ExperienceCard title="Airport Reset Room" text="A travel recovery environment built around breath, sleep, and nervous system reset." />
          <ExperienceCard title="Retail Recovery Lab" text="A premium store installation showing the product, packaging, app, and behavior loop together." />
        </div>
      </section>

      <section id="execution" className="pitchSlide darkSlide">
        <span className="slideNumber">14</span>
        <p className="eyebrow">Cross-Functional Execution</p>

        <h2>How I would align the company around the idea.</h2>

        <div className="teamGrid">
          <Team title="Leadership" text="Define why the collaboration matters, what success looks like, and how it supports WHOOP’s larger brand ambition." />
          <Team title="Industrial Design" text="Translate the creative platform into materials, colors, band details, finishes, and product hierarchy." />
          <Team title="Packaging" text="Build an unboxing system that feels premium, useful, and emotionally aligned with recovery." />
          <Team title="Product UX" text="Map WHOOP data signals to Calm rituals and create the member journey inside the app." />
          <Team title="Marketing" text="Create the campaign system, visual language, social assets, launch film, email, and OOH." />
          <Team title="Partnerships" text="Align Calm content, talent, co-marketing rights, naming, legal, and rollout strategy." />
          <Team title="Events" text="Turn the idea into physical experiences that people can feel, test, and share." />
          <Team title="PR + Creators" text="Build the narrative and seeding strategy around recovery as both measurable and emotional." />
        </div>
      </section>

      <section className="pitchSlide roadmapSlide">
        <span className="slideNumber">15</span>
        <p className="eyebrow">Launch Roadmap</p>

        <h2>From idea to launch system.</h2>

        <div className="roadmap">
          <Roadmap phase="01" title="Strategy Alignment" text="Partnership rationale, audience overlap, KPI definition, product story, and launch thesis." />
          <Roadmap phase="02" title="Design Development" text="Band colorways, materials, packaging architecture, app concepts, campaign language, and art direction." />
          <Roadmap phase="03" title="Prototype + UX" text="Physical samples, packaging mockups, digital flows, onboarding logic, and Calm content mapping." />
          <Roadmap phase="04" title="Campaign Production" text="Hero imagery, film, OOH, social, launch email, press materials, retail content, and creator kits." />
          <Roadmap phase="05" title="Launch Activation" text="Press moment, app rollout, creator seeding, pop-up recovery spaces, retail displays, and live demos." />
          <Roadmap phase="06" title="Post-Launch Learning" text="Measure adoption, engagement, content usage, conversion, retention, and community response." />
        </div>
      </section>

      <section id="notes" className="pitchSlide closingSlide">
        <p className="eyebrow">Creative Director Closing Note</p>

        <h2>This is not a concept for a band. It is a system for a collaboration.</h2>

        <p>
          The goal is to demonstrate how I would think inside WHOOP: translating
          a strategic partnership into product design, packaging, app behavior,
          campaign storytelling, physical activations, and a clear operating
          system for the teams responsible for bringing it to life.
        </p>
      </section>

      <footer className="footer">
        WHOOP × Calm — Speculative Creative Direction Pitch
      </footer>
    </main>
  );
}

function Insight({ title, text }) {
  return (
    <div className="insightCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function JourneyStep({ number, title, text }) {
  return (
    <div className="journeyStep">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ExperienceCard({ title, text }) {
  return (
    <div className="experienceCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Team({ title, text }) {
  return (
    <div className="teamCard">
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
