export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background image */}
      <div className="hero-bg" aria-hidden="true" />
      {/* Overlay */}
      <div className="hero-overlay" aria-hidden="true" />
      {/* Decorative circles */}
      <div className="hero-deco" aria-hidden="true">
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />
      </div>

      <div className="container hero-content">
        {/* Tag */}
        <div className="hero-tag">
          <span>🎓</span>
          <span>Lets Learn to Earn</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          The Pathway Towards{' '}
          <span className="hero-highlight">Skill, Employment</span>
          {' '}&amp; Success
        </h1>

        {/* Sub */}
        <p className="hero-subtitle">
          Birgunj Skill Technical &amp; Business Training Center offers government‑certified
          vocational training programs to help you build a rewarding career in skilled trades.
          Located at Radhemai‑13, Birgunj (Nepal).
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#courses" className="btn btn-primary">
            🔧 Explore Courses
          </a>
          <a href="#contact" className="btn btn-outline">
            📞 Contact Us
          </a>
        </div>

        {/* Mini stats */}
        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-lbl">Years Training</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-num">4</span>
            <span className="hero-stat-lbl">Courses</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-lbl">Graduates</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
