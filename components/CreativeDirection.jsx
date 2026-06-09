export default function CreativeDirection() {
  return (
    <section className="section bg-white/[0.03]">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">02 — Creative Direction</p>
          <h2 className="h2">Quiet performance. Designed for recovery.</h2>
        </div>

        <div className="space-y-5">
          {[
            "Recovery should feel intentional, not clinical.",
            "The product language should feel soft, premium, and human.",
            "The collaboration should translate Calm’s emotional softness through WHOOP’s performance credibility.",
          ].map((item) => (
            <div key={item} className="card">
              <p className="body">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
