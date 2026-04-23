interface Course {
  id:       string
  emoji:    string
  badge:    string
  name:     string
  desc:     string
  duration: string
  level:    string
}

const COURSES: Course[] = [
  {
    id:       'ac-technician',
    emoji:    '❄️',
    badge:    'HVAC',
    name:     'R & AC Technician Training',
    desc:     'Learn to install, service, and repair refrigeration and air conditioning systems. Covers fundamentals of refrigerants, compressors, electrical circuits, and safety standards.',
    duration: '3 Months',
    level:    'Beginner',
  },
  {
    id:       'electrician',
    emoji:    '⚡',
    badge:    'Electrical',
    name:     'Building Electrician Training',
    desc:     'Master residential and commercial electrical wiring, panel installation, circuit breakers, earthing systems, and Nepal Electricity Authority standards.',
    duration: '3 Months',
    level:    'Beginner',
  },
  {
    id:       'motor-winding',
    emoji:    '🔄',
    badge:    'Motors',
    name:     'Motor Winding Training',
    desc:     'Gain hands-on expertise in rewinding single-phase and three-phase electric motors. Covers coil winding, insulation, testing, and troubleshooting techniques.',
    duration: '2 Months',
    level:    'Beginner',
  },
  {
    id:       'welding',
    emoji:    '🔥',
    badge:    'Welding',
    name:     'Professional Welder Training',
    desc:     'Develop skills in MIG, TIG, and arc welding. Learn metal cutting, joint preparation, safety protocols, and welding inspection for professional-grade results.',
    duration: '3 Months',
    level:    'Beginner',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Programs</div>
          <h2 className="section-title">Vocational Training Courses</h2>
          <p className="section-subtitle">
            Government-certified programs designed to give you practical,
            job-ready skills from day one.
          </p>
        </div>

        <div className="courses-grid">
          {COURSES.map(course => (
            <article key={course.id} className="course-card">
              <div className="course-icon-wrap">
                <span className="course-emoji" aria-label={course.name}>
                  {course.emoji}
                </span>
              </div>
              <div className="course-body">
                <span className="course-badge">{course.badge}</span>
                <h3 className="course-name">{course.name}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-meta">
                  <span className="course-meta-tag">🗓 {course.duration}</span>
                  <span className="course-meta-tag">📊 {course.level}</span>
                </div>
                <a href="#contact" className="course-enroll">
                  Enroll Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
