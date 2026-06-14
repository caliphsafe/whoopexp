import "./globals.css";

const images = {
  hero: "/images/hero/hero-recovery-has-two-sides.jpg",
  problem: "/images/strategy/recovery-fragmented.jpg",
  opportunity: "/images/strategy/connected-recovery-system.jpg",
  whoopPosition: "/images/strategy/whoop-owns-the-signal.jpg",
  calmPosition: "/images/strategy/calm-guides-the-response.jpg",
  thesis: "/images/strategy/measured-and-guided.jpg",
  packaging: "/images/packaging/packaging-open-system.jpg",
  packagingTechSheet: "/images/packaging/packaging-production-tech-sheet.jpg",
  collection: "/images/product/product-collection-reveal.jpg",
  recovery: "/images/product/recovery-band-hero.jpg",
  sleep: "/images/product/sleep-band-hero.jpg",
  breath: "/images/product/breath-band-hero.jpg",
  focus: "/images/product/focus-band-hero.jpg",
  digitalOverview: "/images/digital/digital-ecosystem-overview.jpg",
morningRecoveryFlow: "/images/digital/morning-recovery-flow.jpg",
stressBreathworkFlow: "/images/digital/stress-to-breathwork-flow.jpg",
sleepWindDownFlow: "/images/digital/sleep-wind-down-flow.jpg",
marketingSystem: "/images/marketing/marketing-system-asset-suite.png"
};

const productBands = [
  {
    name: "Recovery Band",
    role: "Restore",
    color: "Warm Sand",
    image: images.recovery,
    copy:
      "The flagship product. Built around physical recovery, readiness, and the daily ritual of understanding the body before making the next move.",
  },
  {
    name: "Sleep Band",
    role: "Recover",
    color: "Midnight Navy",
    image: images.sleep,
    copy:
      "A night-focused expression connecting WHOOP sleep data to Calm wind-down rituals, sleep stories, and recovery preparation.",
  },
  {
    name: "Breath Band",
    role: "Regulate",
    color: "Mist Blue",
    image: images.breath,
    copy:
      "The bridge between biometric stress signals and guided action. WHOOP detects the moment. Calm guides the reset.",
  },
  {
    name: "Focus Band",
    role: "Perform",
    color: "Cloud White",
    image: images.focus,
    copy:
      "A performance expression built around mental clarity, cognitive readiness, and the moments before output.",
  },
];

const digitalMoments = [
  {
    signal: "Low Recovery",
    action: "5-minute Calm reset",
    detail:
      "When the member wakes up below baseline, the app recommends a guided recovery session before training intensity decisions.",
  },
  {
    signal: "Poor Sleep",
    action: "Wind-down ritual",
    detail:
      "Sleep debt and restlessness trigger a Calm sleep story, breathing sequence, or evening recovery reminder.",
  },
  {
    signal: "High Stress",
    action: "Breathwork session",
    detail:
      "Elevated stress becomes actionable through a short regulation session tied directly to the member's current state.",
  },
  {
    signal: "High Strain",
    action: "Recovery protocol",
    detail:
      "After a demanding day, WHOOP surfaces a guided cooldown combining breath, stillness, and sleep preparation.",
  },
];

const teams = [
  {
    title: "Leadership",
    text:
      "Align on why this partnership matters, what success looks like, and how it expands WHOOP's recovery authority.",
  },
  {
    title: "Partnerships",
    text:
      "Define rights, content access, co-marketing structure, launch timing, talent approvals, and brand governance.",
  },
  {
    title: "Industrial Design",
    text:
      "Translate the concept into band materials, finishes, color hierarchy, hardware details, and product family logic.",
  },
  {
    title: "Packaging",
    text:
      "Create a premium unboxing system that turns setup into the first recovery ritual.",
  },
  {
    title: "Product UX",
    text:
      "Map WHOOP biometric signals to Calm guided actions, onboarding moments, and behavior loops inside the app.",
  },
  {
    title: "Brand Marketing",
    text:
      "Build the launch world across campaign film, social, email, OOH, app surfaces, retail, and creator assets.",
  },
  {
    title: "Events",
    text:
      "Translate the collaboration into recovery pods, marathon lounges, airport reset rooms, and retail labs.",
  },
  {
    title: "PR + Creators",
    text:
      "Shape the external narrative around recovery becoming both measurable and guided.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">WHOOP × CALM</div>

        <div className="navLinks">
          <a href="#problem">Problem</a>
          <a href="#strategy">Strategy</a>
          <a href="#product">Product</a>
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
          WHOOP measures the body. Calm trains the mind. Together, they can
          create a complete recovery system that moves from biometric signal to
          guided action.
        </p>

        <div className="heroImage">
          <img src={images.hero} alt="WHOOP x Calm hero concept" />
        </div>
      </section>

      <StrategyImageSlide
        id="problem"
        number="01"
        eyebrow="The Problem"
        title="Recovery is fragmented."
        body="Athletes and wellness consumers use separate tools for sleep, strain, stress, breathwork, focus, and mindfulness. The data exists. The guidance exists. The connection does not."
        image={images.problem}
        alt="Fragmented recovery system"
      />

      <StrategyImageSlide
        id="strategy"
        number="02"
        eyebrow="The Opportunity"
        title="What if recovery became one connected system?"
        body="The collaboration can turn WHOOP insights into Calm-guided recovery behaviors. Low recovery, poor sleep, elevated stress, and high strain become specific rituals instead of passive numbers."
        image={images.opportunity}
        alt="Connected recovery system"
        reverse
      />

      <section className="pitchSlide darkSlide">
        <span className="slideNumber">03</span>
        <p className="eyebrow">Brand Intersection</p>

        <h2>WHOOP owns the signal. Calm owns the response.</h2>

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

          <div className="intersection">×</div>

          <div>
            <h3>Calm</h3>
            <ul>
              <li>Breathwork</li>
              <li>Meditation</li>
              <li>Sleep stories</li>
              <li>Emotional regulation</li>
              <li>Mindfulness rituals</li>
            </ul>
          </div>
        </div>

        <div className="systemLine">Together: measurable recovery rituals.</div>
      </section>

      <StrategyImageSlide
        number="04"
        eyebrow="Why WHOOP"
        title="WHOOP is uniquely positioned because the member already trusts the signal."
        body="WHOOP already has the wearable behavior, the subscription relationship, the recovery authority, and the biometric data that tells a member when something needs to change."
        image={images.whoopPosition}
        alt="WHOOP owns the signal"
      />

      <StrategyImageSlide
        number="05"
        eyebrow="Why Calm"
        title="Calm completes the system by giving the member a guided response."
        body="Calm gives WHOOP a way to translate recovery data into emotional regulation, breathwork, sleep preparation, mindfulness, and focus practices."
        image={images.calmPosition}
        alt="Calm guides the response"
        reverse
      />

      <section className="pitchSlide statementSlide">
        <span className="slideNumber">06</span>
        <p className="eyebrow">Collaboration Thesis</p>

        <h2>
          Recovery should be
          <span className="lineBreak"> measured and guided.</span>
        </h2>

        <p className="deckBody">
          This is the core creative platform. WHOOP provides the measurement.
          Calm provides the ritual. The collaboration gives the member a more
          complete path to recovery.
        </p>

        <div className="thesisVisual">
          <img src={images.thesis} alt="Measured and guided recovery concept" />
        </div>
      </section>

      <section id="product" className="pitchSlide imageLedSlide">
        <span className="slideNumber">07</span>
        <p className="eyebrow">Product System</p>

        <h2>A band collection built around recovery behaviors.</h2>

        <p className="body narrow">
          Each band is more than a colorway. Each one represents a behavior in
          the recovery loop: restore, recover, regulate, and perform.
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
                {String(index + 8).padStart(2, "0")}
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
        <span className="slideNumber">12</span>
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
          <Insight
            title="Outer Sleeve"
            text="Soft-touch paper and warm stone tones introduce Calm's restraint and silence."
          />

          <Insight
            title="Sculpted Tray"
            text="The product is centered like a precision recovery object, reinforcing WHOOP's discipline."
          />

          <Insight
            title="Welcome Card"
            text="Sets the philosophy: measure the body, train the mind, recover completely."
          />

          <Insight
            title="Activation Card"
            text="Connects the wearable setup to Calm content, app onboarding, and subscription unlocks."
          />
        </div>
      </section>
<section className="pitchSlide imageLedSlide">
  <span className="slideNumber">13</span>
  <p className="eyebrow">Packaging Production Handoff</p>

  <h2>From visual concept to manufacturable system.</h2>

  <p className="body narrow">
    The packaging direction needs to translate into real production decisions:
    structure, materials, dielines, tray logic, print finishes, insert hierarchy,
    sustainability, and the handoff between creative, industrial design,
    packaging, and manufacturing.
  </p>

  <div className="wideImage">
    <img
      src={images.packagingTechSheet}
      alt="WHOOP x Calm packaging production tech sheet"
    />
  </div>

  <div className="packagingBreakdown">
    <Insight
      title="Structure"
      text="Rigid box, sleeve, molded tray, and insert system are planned as separate production components."
    />

    <Insight
      title="Materials"
      text="Soft-touch paper, molded pulp, woven textile, and refined metallic details keep the system premium and tactile."
    />

    <Insight
      title="Finish"
      text="Embossing, debossing, matte coatings, and restrained color use create a quiet luxury experience."
    />

    <Insight
      title="Handoff"
      text="The tech sheet gives packaging, product, vendors, and leadership a clear shared production reference."
    />
  </div>
</section>
      <section id="digital" className="pitchSlide imageLedSlide">
  <span className="slideNumber">14</span>
  <p className="eyebrow">Digital Experience</p>

  <h2>Turn biometric insight into guided recovery action.</h2>

  <p className="body narrow">
    The app experience is where the collaboration becomes useful. WHOOP
    identifies the state. Calm provides the next best recovery behavior.
  </p>

  <div className="wideImage">
    <img
      src={images.digitalOverview}
      alt="WHOOP x Calm digital ecosystem overview"
    />
  </div>

  <div className="journeyGrid">
    {digitalMoments.map((moment, index) => (
      <JourneyStep
        key={moment.signal}
        number={String(index + 1).padStart(2, "0")}
        title={moment.signal}
        action={moment.action}
        text={moment.detail}
      />
    ))}
  </div>
        
</section>
<DigitalFlowSlide
  number="14"
  eyebrow="User Flow"
  title="Morning recovery becomes a guided ritual."
  body="The member wakes up, sees their recovery state, receives a Calm recommendation, completes the session, and returns to WHOOP with a clearer understanding of how behavior affects readiness."
  image={images.morningRecoveryFlow}
  alt="Morning recovery digital flow"
/>

<DigitalFlowSlide
  number="16"
  eyebrow="User Flow"
  title="Stress signals become breathwork."
  body="Instead of simply showing elevated stress, the product creates an immediate recovery action: detect the signal, recommend the breathwork, complete the session, and close the loop."
  image={images.stressBreathworkFlow}
  alt="Stress to breathwork digital flow"
  reverse
/>

<DigitalFlowSlide
  number="17"
  eyebrow="User Flow"
  title="Sleep data becomes a wind-down experience."
  body="Sleep insight becomes an evening ritual. The member is guided from sleep debt and recovery trends into a Calm wind-down session and next-day reflection."
  image={images.sleepWindDownFlow}
  alt="Sleep wind down digital flow"
/>
      <section className="pitchSlide imageLedSlide darkSlide">
  <span className="slideNumber">18</span>
  <p className="eyebrow">Marketing System</p>

  <h2>A campaign built from one sentence.</h2>

  <p className="body narrow">
    The campaign system turns one idea into coordinated assets across film,
    out-of-home, social, email, app surfaces, PR, creators, and retail.
  </p>

  <div className="campaignLine">Recovery Has Two Sides</div>

  <div className="wideImage">
    <img
      src={images.marketingSystem}
      alt="WHOOP x Calm marketing asset system"
    />
  </div>

  <div className="grid three">
    <Insight
      title="Hero Film"
      text="Body signals and mental rituals moving in parallel."
    />

    <Insight
      title="OOH"
      text="Large negative space, product hero imagery, direct copy, and premium restraint."
    />

    <Insight
      title="Social Assets"
      text="Short-form visuals showing different recovery states across the band collection."
    />

    <Insight
      title="Email + App"
      text="Launch flows that explain the value of the system, not just the product."
    />

    <Insight
      title="Press Kit"
      text="A premium seeding experience for creators, athletes, wellness voices, and media."
    />

    <Insight
      title="Retail Graphics"
      text="Material, packaging, and app story translated into physical sales environments."
    />
  </div>
</section>

      <section className="pitchSlide">
        <span className="slideNumber">19</span>
        <p className="eyebrow">Physical Activation</p>

        <h2>Make recovery something people can enter.</h2>

        <div className="activationCards">
          <ExperienceCard
            title="Recovery Pods"
            text="Architectural mini spaces for guided breathwork, product trial, and recovery education."
          />

          <ExperienceCard
            title="Marathon Recovery Lounge"
            text="Post-race space where WHOOP data informs guided Calm sessions."
          />

          <ExperienceCard
            title="Airport Reset Room"
            text="A travel recovery environment built around breath, sleep, and nervous system reset."
          />

          <ExperienceCard
            title="Retail Recovery Lab"
            text="A premium store installation showing the product, packaging, app, and behavior loop together."
          />
        </div>
      </section>

      <section id="execution" className="pitchSlide darkSlide">
        <span className="slideNumber">20</span>
        <p className="eyebrow">Cross-Functional Execution</p>

        <h2>How I would align the company around the idea.</h2>

        <div className="teamGrid">
          {teams.map((team) => (
            <Team key={team.title} title={team.title} text={team.text} />
          ))}
        </div>
      </section>

      <section className="pitchSlide roadmapSlide">
        <span className="slideNumber">21</span>
        <p className="eyebrow">Launch Roadmap</p>

        <h2>From idea to launch system.</h2>

        <div className="roadmap">
          <Roadmap
            phase="01"
            title="Strategy Alignment"
            text="Partnership rationale, audience overlap, KPI definition, product story, and launch thesis."
          />

          <Roadmap
            phase="02"
            title="Design Development"
            text="Band colorways, materials, packaging architecture, app concepts, campaign language, and art direction."
          />

          <Roadmap
            phase="03"
            title="Prototype + UX"
            text="Physical samples, packaging mockups, digital flows, onboarding logic, and Calm content mapping."
          />

          <Roadmap
            phase="04"
            title="Campaign Production"
            text="Hero imagery, film, OOH, social, launch email, press materials, retail content, and creator kits."
          />

          <Roadmap
            phase="05"
            title="Launch Activation"
            text="Press moment, app rollout, creator seeding, pop-up recovery spaces, retail displays, and live demos."
          />

          <Roadmap
            phase="06"
            title="Post-Launch Learning"
            text="Measure adoption, engagement, content usage, conversion, retention, and community response."
          />
        </div>
      </section>

      <section id="notes" className="pitchSlide closingSlide">
        <p className="eyebrow">Creative Director Closing Note</p>

        <h2>
          This is not a concept for a band. It is a system for a collaboration.
        </h2>

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

function StrategyImageSlide({
  id,
  number,
  eyebrow,
  title,
  body,
  image,
  alt,
  reverse = false,
}) {
  return (
    <section
      id={id}
      className={`pitchSlide strategyImageSlide ${reverse ? "reverse" : ""}`}
    >
      <span className="slideNumber">{number}</span>

      <div className="strategyCopy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div className="strategyImage">
        <img src={image} alt={alt} />
      </div>
    </section>
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

function JourneyStep({ number, title, action, text }) {
  return (
    <div className="journeyStep">
      <span>{number}</span>
      <h3>{title}</h3>
      <strong>{action}</strong>
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
function DigitalFlowSlide({ number, eyebrow, title, body, image, alt, reverse = false }) {
  return (
    <section className={`pitchSlide strategyImageSlide ${reverse ? "reverse" : ""}`}>
      <span className="slideNumber">{number}</span>

      <div className="strategyCopy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div className="strategyImage">
        <img src={image} alt={alt} />
      </div>
    </section>
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
