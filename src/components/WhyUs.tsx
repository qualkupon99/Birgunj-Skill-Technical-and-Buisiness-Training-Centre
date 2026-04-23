interface Feature {
  emoji: string
  title: string
  desc:  string
}

const FEATURES: Feature[] = [
  {
    emoji: '🏛️',
    title: 'Government Certified',
    desc:  'All courses are certified by the Government of Nepal under CTEVT, ensuring your qualification is recognized nationwide and by employers.',
  },
  {
    emoji: '👷',
    title: 'Expert Instructors',
    desc:  'Learn from seasoned industry professionals with 10+ years of hands-on experience in their respective trade fields.',
  },
  {
    emoji: '🔧',
    title: 'Practical-First Learning',
    desc:  'Over 70% of training time is hands-on in our fully equipped workshops — because real skills come from real practice.',
  },
  {
    emoji: '💼',
    title: 'Job Placement Support',
    desc:  'Our dedicated placement team actively connects graduates with employers. Over 90% of our students find relevant work within 3 months.',
  },
  {
    emoji: '💰',
    title: 'Affordable Fees',
    desc:  'We believe quality training should be accessible to all. Our programs are priced to fit every budget, with flexible payment options.',
  },
  {
    emoji: '🏆',
    title: 'Proven Track Record',
    desc:  'With 500+ successful graduates since our founding, BSTBTC is Birgunj\'s most trusted technical training institution.',
  },
]

export default function WhyUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title">Your Success Is Our Mission</h2>
          <p className="section-subtitle">
            We combine certified curriculum, expert trainers, and real-world practice
            to make you job-ready.
          </p>
        </div>

        <div className="why-grid">
          {FEATURES.map(({ emoji, title, desc }) => (
            <div key={title} className="why-card">
              <div className="why-icon-box" aria-hidden="true">{emoji}</div>
              <div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
