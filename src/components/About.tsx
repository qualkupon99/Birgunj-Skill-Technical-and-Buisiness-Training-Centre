export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">

          {/* Left — image */}
          <div className="about-img-wrapper">
            <img
              src="/images/gallery-classroom.png"
              alt="Students learning at Birgunj Skill Technical & Business Training Center"
              className="about-img"
            />
            <div className="about-badge">
              <span className="about-badge-year">10+</span>
              <span className="about-badge-text">Years of Excellence</span>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="section-tag">About Us</div>
            <h2 className="section-title about-section-title">
              Birgunj Skill Technical &amp; Business Training Center
            </h2>

            <p className="about-desc">
              Established in Radhemai-13, Birgunj (Nepal), BSTBTC has been empowering youth with
              market-relevant technical skills for over a decade. Our motto — <em>"Lets Learn to Earn"</em> —
              drives everything we do, from curriculum design to job placement support.
            </p>
            <p className="about-desc">
              We offer CTEVT-affiliated, government-certified vocational training that equips students
              with practical knowledge and professional confidence to thrive in the modern workforce.
            </p>

            {/* Registration details */}
            <div className="about-reg-grid">
              <div className="about-reg-card">
                <div className="about-reg-lbl">Registration No.</div>
                <div className="about-reg-val">330287/080/81</div>
              </div>
              <div className="about-reg-card">
                <div className="about-reg-lbl">PAN No.</div>
                <div className="about-reg-val">619777750</div>
              </div>
              <div className="about-reg-card">
                <div className="about-reg-lbl">Location</div>
                <div className="about-reg-val">Radhemai-13, Birgunj</div>
              </div>
              <div className="about-reg-card">
                <div className="about-reg-lbl">Province</div>
                <div className="about-reg-val">Madhesh Pradesh, Nepal</div>
              </div>
            </div>

            {/* Mission / Vision */}
            <div className="about-mv-grid">
              <div className="about-mv-card">
                <h4>🎯 Mission</h4>
                <p>
                  To provide accessible, quality vocational training that enables youth to
                  secure dignified employment and contribute to Nepal's economic growth.
                </p>
              </div>
              <div className="about-mv-card">
                <h4>🌟 Vision</h4>
                <p>
                  To be the leading technical training institution in the Madhesh Province,
                  recognized for excellence, integrity, and community impact.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
